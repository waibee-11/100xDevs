import zod from "zod";

export const signUpInput = zod.object({
    email: zod.string(),
    password: zod.string().min(6),
    name: zod.string().optional(),
});

export const signInInput = zod.object({
    email: zod.string(),
    password: zod.string().min(6),
})

export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export const updateBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.string(),
})

// type inference in zod
export type SignUpInput = zod.infer<typeof signUpInput>;
export type SignInInput = zod.infer<typeof signInInput>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;