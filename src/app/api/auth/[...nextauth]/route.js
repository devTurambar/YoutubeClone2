import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { session } from "@/lib/session";
import refreshAccessToken from "@/lib/refreshToken";

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
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // scope: "https://www.googleapis.com/auth/youtube.readonly",
      authorization: { 
        params: {
          //The openid configuration is used for OpenID Connect, which is often used alongside OAuth2. I have included the openid profile email scopes in addition to youtube.readonly. These are commonly used scopes for retrieving basic user information...without this, the request was not working
          scope: 'https://www.googleapis.com/auth/youtube.readonly openid profile email' 
        } 
      },
    })    
  ],
  callbacks: {
    //signIn is called when the user signisn with a google account and is redirected to our application
    async signIn({ account, profile }) {
      let aux = JSON.stringify(account);
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
    //session will run after jtw callback...The session callback is called whenever a session is checked.
    session,
    //This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client). The returned value will be encrypted, and it is stored in a cookie.
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });
        if (!user) {
          throw new Error('No user found');
        }
        token.id = user.id
        token.accessToken = account.access_token;
        token.id_token = account.id_token;
        //TODO LOGIC TO REFRESH ACCESS TOKEN UPON EXPIRATION
        // let data = new Date();
        // data.getTime()
        token.expires_at = account.expires_at;
      }
      return token;
    },
    authorized({ req , token }) {
      if(token) return true // If there is a token, the user is authenticated
    },
  },
}
const handler = NextAuth(authOption);
export { handler as GET, handler as POST }

