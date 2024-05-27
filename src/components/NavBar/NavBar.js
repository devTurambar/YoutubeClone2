import { apiRequest } from "@/lib/Axios";
import LogInOutButton from "./LogInOutButton/LogInOutButton";
import Image from 'next/image';
import { getUserSession } from "@/lib/session";
import MenuButton  from "../MenuButton/MenuButton"
// import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";

export default async function Navbar() {
    const user = await getUserSession(true);
    console.log(user)
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
            <Search />              
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="YT" src={user? user.image : "/icons/silhouette.svg"} />
                        </div>
                    </div>
                    <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                        <LogInOutButton/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}