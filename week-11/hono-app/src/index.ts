import { Hono } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

async function authorizationMiddleware(c: any, next: () => Promise<void>) {
  console.log(c.req.header("Authorization"));
  await next();
}

app.post('/', authorizationMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!');
})

export default app
