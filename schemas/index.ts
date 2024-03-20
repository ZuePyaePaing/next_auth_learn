import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "password is require" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "name is require" }),
  email: z.string().email(),
  password: z.string().min(6, { message: "password is require" }),
});
