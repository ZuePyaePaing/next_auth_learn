"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  console.log(value);
  const validatedFields = RegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email); // data folder in export
  if (existingUser) {
    return { error: "Email  already in use!. " };
  }
  // prisma generate and data push က လုက်ကိုလုပ်ရမယ် မလုပ်လျှင် type checking မလုပ်နိုင်ဘူး

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
