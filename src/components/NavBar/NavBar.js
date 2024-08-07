import { apiRequest } from "@/lib/Axios";
import LogInButton from "./LogInButton/LogInButton";
import LogOutButton from "./LogOutButton/LogOutButton";
import Image from 'next/image';
import { getUserSession } from "@/lib/session";
import MenuButton  from "../MenuButton/MenuButton"
// import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";
import SearchBar from "../Search/SearchBar";
import Logo from "../Logo/Logo";

export default async function Navbar() {
    const user = await getUserSession(true);
    // const [session, setSession] = useState(null);
    // useEffect(() => {
    //     (async () => {
    //         const sessionData = await getUserSession(false);
    //         setSession(sessionData);
    //     })
    // },[]);
    // const global = useContext(GlobalStateContext);
    // console.log(global);

    return (

        <div className="navbar w-webkit-available bg-white fixed h-16 pl-0 top-0 left-18 flex justify-between">
        <MenuButton outerContainer="cursor-pointer m-auto w-12 ml-3 hidden" innerContainer="flex flex-col hover:bg-gray-100 rounded-full p-4"/>
        <Logo />
        <SearchBar />              
        <div className="flex-none gap-2">
            {user ? (
                <LogOutButton profilePic={user.image}/>
                )
                : (
                    <LogInButton />
                )
            }
        </div>
    </div>

        // <div className="navbar w-webkit-available bg-white fixed h-16 pl-0 top-0 left-18 flex justify-between">
        //     <MenuButton outerContainer="cursor-pointer m-auto w-12 ml-3 hidden" innerContainer="flex flex-col hover:bg-gray-100 rounded-full p-4"/>
        //     <Logo />
        //     <SearchBar />              
        //     <div className="flex-none gap-2">
        //         <div className="dropdown dropdown-end">
        //             <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                 <img alt="YT" src={user? user.image : "/icons/silhouette.svg"} />
        //                 </div>
        //             </div>
        //             <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        //                 <li>
        //                     <a className="justify-between">
        //                         Profile
        //                         <span className="badge">New</span>
        //                     </a>
        //                 </li>
        //                 <li><a>Settings</a></li>
        //                 <li>
        //                 <LogInButton/>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    );

}