"use server"
import { User, getServerSession } from 'next-auth'

export const session = async ({session, token}) => {
  session.user.id = token.id;
  session.user.accessToken = token.accessToken;
  session.accessToken = token.accessToken
  session.id_token =  token.id_token;
  session.user.expires_at = token.expires_at;
  return session;
}

export const getUserSession = async (isServerComponent) => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  try { 
    console.log("trys");
    if (!authUserSession) {
      throw new Error('unauthorized');
    }
        //have to convert current date from miliseconds to seconds, thats why /1000
    // if(authUserSession?.expires_at < Date.now()/1000){
    //   throw new Error("Access Token Expired");
    // }
    //Checks if the component that called GetUserSession is a client or server component...if client component, return less (non-sensitive) information
    if(!isServerComponent){
      return authUserSession?.user.name;
    }
    else{
      return authUserSession?.user;
    }
  }catch(e){
    console.log("cath")
    console.log(e);
    //no user
    return false;
  }
}