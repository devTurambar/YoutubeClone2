"use client"
import { useState, useEffect } from "react";
import { getSession, signIn, signOut } from "next-auth/react";
const LogInOutButton = (logged) => {
    const [session, setSession] = useState(null);
    //can have async functions on client components, if inside useEffect
    useEffect(() => {
        //Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
        (async () => {
          const sessionData = await getSession();
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