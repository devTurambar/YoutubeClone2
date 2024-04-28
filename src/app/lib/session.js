import { User, getServerSession } from 'next-auth'

export const session = async (session, token) => {
  // console.log("here ID");
  // console.log("session.user is "+session);
  // console.log("token in sessionjs is "+token);
  // if(token){
  //   console.log("here inside session  "+token.id)
  //   session.user.id = token.id
  //   return session
  // }else return;

  // console.log("token is "+JSON.stringify(session));
  session.session.user.id = session.token.id;
  return session;
}

export const getUserSession = async () => {
  // const authUserSession = await getServerSession({
  //   callbacks: {
  //     session,
  //   },
  // })
  // console.log(authUserSession);
  // // if (!authUserSession) throw new Error('unauthorized')
  // return authUserSession?.user
  const authUserSession = await getServerSession()
  return authUserSession?.user;
}