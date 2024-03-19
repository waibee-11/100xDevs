import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string,
	}
}>();

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)


export default app

// postgresql://neondb_owner:PRIMJ45OWxbp@ep-patient-poetry-a5441y09.us-east-2.aws.neon.tech/neondb?sslmode=require

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZmE1MmM1M2UtNzVjYy00YmY2LTg4M2MtODUzNjkzMWY2NTgxIiwidGVuYW50X2lkIjoiYjg4ZmE3MGM3Y2QzNzJjNWViYjNjMDhlYTQwODhiNWU3Yzg1OTEwOTQxMjhlMTU3YjZlY2MxZTU0ZGI4MzU0YiIsImludGVybmFsX3NlY3JldCI6ImU5YjMyZjAwLTk4N2ItNDlmNC04YWNiLTE0ZTMxNmEyNTgzZSJ9.1kloZBTAqof4mlo-PdhjvpsPc2mN0TH97sbmwhGUkp0"