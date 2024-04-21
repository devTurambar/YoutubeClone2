import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // profile(profile) {
      //   console.log(profile);
      //   console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      //   return {
      //     // Return all the profile information you need.
      //     // The only truly required field is `id`
      //     // to be able identify the account when added to a database
      //   }
      // },
    })
  ]
})

export { handler as GET, handler as POST }




// const handler = NextAuth({
//     providers: [
//         Providers.Google({
//           clientId: process.env.GOOGLE_CLIENT_ID,
//           clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//           authorizationUrl:
//             'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
//           scope:
//             'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
//         }),
//       ],
//       jwt: {
//         encryption: true,
//       },
//       secret: process.env.SECRET,
//       callbacks: {
//         async jwt(token, user, account, profile, isNewUser) {
//           // console.log({ profile });
//           if (account?.accessToken) {
//             token.accessToken = account.accessToken;
//           }
//           return token;
//         },
//       },
//     });

// export { handler as GET, handler as POST }