import { Hono } from 'hono'
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import test from 'node:test';

export const runtime = "edge";

const app = new Hono().basePath("/api");
app
    .get("/hello", (c) => {
        return c.json({
            message: "Hello Next.js!",
        });
    })
    .get("/hello/:test", zValidator("param", z.object({
        test: z.number(),
    })), (c) => {
        const test = c.req.param("test");
        return c.json({
            message: `Hello ${test}!`,
            test: test
        });
    })
    .post("/create/:userId", zValidator("json", z.object({ 
        name: z.string(),
       userId: z.number(),
       })), (c) => {
        const { name, userId } = c.req.valid("json");
        return c.json({
            message: `Hello ${name}!`,
            userId: userId
        }); 
       });

export const GET = handle(app);
export const POST = handle(app);

export default app