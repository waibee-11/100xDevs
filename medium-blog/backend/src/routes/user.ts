import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { signUpInput, signInInput } from "@waibee/medium-common-2";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const body = await c.req.json();
  const { success } = signUpInput.safeParse(body);
  if (!success){
    c.status(411);
    return c.json({
      msg: "Inputs are not correct",
    });
  }

  const response = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
      image: body.image || "",
      profile: body.profile || "",
    }
  });

  const token = await sign({ id: response.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token
  });

});
  
userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if (!success){
    c.status(411);
    return c.json({
      msg: "Wrong inputs",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  });

  if (!user){
    c.status(403);
    return c.json({
      msg: 'User not found'
    });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    msg: 'Success',
    jwt: token,
  });
});

userRouter.get('/profile', async (c) => {
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
    const user = await prisma.user.findFirst({
      where: {
        id: response.id
      }, select: {
        name: true,
        email: true,
        password: true,
        id: true,
        image: true,
        profile: true,
      }
    });
    return c.json({
      response: user
    });
  } catch (e){
      c.status(403);
      return c.json({
      msg: 'Invalid user'
      });
  }
});

userRouter.put('/profile', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const authHeader: string = c.req.header('Authorization') || "";
  const token = authHeader.split(' ')[1];
  const body = await c.req.json();

  try{
    const response = await verify(token, c.env.JWT_SECRET);
    if (!response){
      c.status(403);
      return c.json({
        msg: 'Invalid user'
      });
    }
    const user = await prisma.user.update({
      where: {
        id: response.id
      },
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
        image: body.image,
        profile: body.profile,
      }
    });
    return c.json({
      response: user
    });
  } catch (e){
      return c.json({
        msg: "Not updated",
      });
  }
});