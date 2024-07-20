"use client"
import { useState, useEffect } from "react";
import { getSession, signIn, signOut  } from "next-auth/react";
import { getUserSession } from "@/lib/session";
const LogOutButton = ( {profilePic} ) => {
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
        <div >
            <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="YT" src={profilePic} />
                    </div>
                </div>
                <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <div>
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="YT" src={profilePic} />
                                </div>
                            </div>
                            <div>Raphael Tomaz</div>
                        </div>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <hr></hr>   
                    <li><a>Settings</a></li>
                    <li><div onClick={handleClick}>Sign Out</div></li>
                </ul>
            </div>
        </div>          
    );

}
export default LogOutButton;