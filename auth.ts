import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        id: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const password = credentials.password as string;

        // logic to salt and hash password
        const pwHash = await bcrypt.hash(password, 10);

        // logic to verify if user exists
        user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          await prisma.user.create({
            data: {
              email: credentials.email as string,
              password: pwHash,
            },
          });
        }
        return user;
      },
    }),
  ],
});
