"use server"
import { User, getServerSession } from 'next-auth'

export const session = async ({session, token}) => {
  session.user.id = token.id;
  session.user.accessToken = token.accessToken;
  session.accessToken = token.accessToken
  session.id_token =  token.id_token;
  return session;
}

export const getUserSession = async (isServerComponent) => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  try { 
    console.log("try")
    if (!authUserSession) throw new Error('unauthorized');
    if(!isServerComponent){
      console.log("not user")
      return authUserSession?.user.name;
    }
    else{
      console.log("authenticated")
      return authUserSession?.user;
    }
  }catch(e){
    console.log("cath")
    console.log(e);
  }
}