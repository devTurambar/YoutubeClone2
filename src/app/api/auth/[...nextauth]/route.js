import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/app/lib/prisma";
import { session } from "@/app/lib/session";

//client side session, useSession, uses the context API from React
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     })
//   ],
//   secret: process.env.GOOGLE_CLIENT_SECRET,
// })

const authOption = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })    
  ],
  callbacks: {
    //signIn is called when the user signisn with a google account and is redirected to our application
    async signIn({ account, profile }) {
      let aux = JSON.stringify(account);
      // console.log("IN SIGNINNNNNNNNNNNN "+ aux + " account "+JSON.stringify(account))
      if (!profile?.email) {
        throw new Error('No profile')
      }
      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
        },
        update: {
          name: profile.name,
        },
      })
      return true
    },
    session,
    async jwt({ token, user, account, profile }) {
      console.log("here isssssssssssssss tolen "+JSON.stringify(user))
      if (profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });
        // console.log("here isssssssssssssss"+user.id)
        // console.log("here isssssssssssssss"+user.email)
        if (!user) {
          // console.log("errorrrrrrrrrrrrrrrrrr")
          throw new Error('No user found');
        }
        token.id = user.id
      }
      // console.log("here is not"+token+"    "+token.id)
      return token
    },
  },
}
const handler = NextAuth(authOption)
export { handler as GET, handler as POST }

