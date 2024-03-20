"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login =async (value: z.infer<typeof LoginSchema>) => {
    console.log(value)
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
};
