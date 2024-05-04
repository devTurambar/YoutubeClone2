"use client"
import { useState, useEffect } from "react";
import { getSession, signIn, signOut  } from "next-auth/react";
import { getUserSession } from "@/app/lib/session";
const LogInOutButton = ( {isAuth} ) => {
    console.log(isAuth);
    const [session, setSession] = useState(null);
    //can have async functions on client components, if inside useEffect
    useEffect(() => {
        //Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope...this is how I can acess server user data inside a client component (note that i had to use "use server" on getUserSession file...
        //I am doing this so I can select which data from the user I am sending to the client, instead of sending the entire user object, which contains sensitive information, like the access_token, idtoken, and etc..
        (async () => {
            const sessionData = await getUserSession(false);
            setSession(sessionData);
        })();
      }, []);
    const handleClick = () => {
        if(session){
            signOut();
        }else{
            signIn();
        }
    }
    return (
        <button onClick={handleClick}>{session ? "Log out" : "Log in"}</button>            
    );

}
export default LogInOutButton;