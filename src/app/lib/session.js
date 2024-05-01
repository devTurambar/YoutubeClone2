import { User, getServerSession } from 'next-auth'

export const session = async ({session, token}) => {
  // console.log("sessiosn", session);
  // console.log("tolen", token);
  session.user.id = token.id;
  session.user.accessToken = token.accessToken;
  session.accessToken = token.accessToken
  session.id_token =  token.id_token;
  // console.log("sessiosn 222", session);
  // console.log("tolen 2222", token);
  // console.log("id_token issssss "+ token.id_token)
  // console.log(session)
  return session;
}

export const getUserSession = async () => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  try { 
    if (!authUserSession) throw new Error('unauthorized');
    return authUserSession?.user;
  }catch(e){
    console.log(e);
  }
 
  


  // const authUserSession = await getServerSession();
  // console.log(JSON.stringify(authUserSession) + " getserversess");
  // return authUserSession?.user;
}