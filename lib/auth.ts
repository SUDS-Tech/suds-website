import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getEnv } from "./env";

const env = getEnv();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: env.GOOGLE.CLIENT_ID,
      clientSecret: env.GOOGLE.CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
});
