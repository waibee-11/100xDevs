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
    }
}>();

blogRouter.use('/*', async (c, next) => {
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
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
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

    const response = await prisma.post.findMany({});

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
        }
    });

    return c.json({
        msg: "Blog found",
        response
    });

});