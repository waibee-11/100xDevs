import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@waibee/medium-common-2";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string,
        user: {
            id: string,
            email: string,
            name: string,
            password: string
        },
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const authHeader: string = c.req.header('Authorization') || "";
    const token = authHeader.split(' ')[1];
    try{
        const response = await verify(token, c.env.JWT_SECRET);
        if (!response){
          c.status(403);
          return c.json({
            msg: 'Invalid user'
          });
        }
        c.set("userId", response.id);
        await next();
    } catch (e){
        c.status(403);
        return c.json({
        msg: 'Invalid user'
        });
    }
});

blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);

    if (!success){
        c.status(411);
        return c.json({
            msg: "Wrong inputs sent",
        });
    }

    const response  = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId,
            coverImage: body.coverImage || "",
        }
    });

    return c.json({
        msg: "Blog created",
        id: response.id
    });
});

blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);

    if (!success){
        c.status(411);
        return c.json({
            msg: "Wrong inputs sent",
        });
    }

    const response = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
            coverImage: body.coverImage || "",
        }
    });

    return c.json({
        msg: "Blog updated successfully",
        id: response.id
    });

});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const response = await prisma.post.findMany({
        select: {
            title: true,
            content: true,
            id: true,
            coverImage: true,
            author: {
                select: {
                    name: true,
                    profile: true,
                    image: true,
                }
            }
        }
    });

    return c.json({
        response
    });
});

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const response = await prisma.post.findFirst({
        where: {
            id: id,
        }, select: {
            title: true,
            content: true,
            coverImage: true,
            author: {
                select: {
                    name: true,
                    profile: true,
                    image: true,
                }
            }
        }
    });

    return c.json({
        msg: "Blog found",
        response
    });

});

blogRouter.delete('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const response = await prisma.post.delete({
        where: {
            id: id,
        }
    });

    return c.json({
        msg: "Blog deleted successfully",
        response
    });
});