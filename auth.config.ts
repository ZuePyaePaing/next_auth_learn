import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/Credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

/*
user  ရှိမရှိကို getUserbyEmail custom function နဲ့ စစ်ထားပါတယ်
password စစ်ဖို့ bcrypt js ကို compoare function ကိုသုံးထားတယ်
Credentials ကို custom login အတွက်သုံးထားတယ် validation စစ်ပြီး login ဝင်ရင်း email and passsword data base က ယူပြီးစစ်ထားတယ်
*/

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validationFeild = LoginSchema.safeParse(credentials);

        if (validationFeild.success) {
          const { email, password } = validationFeild.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
