"use client"
import LogInOutButton from "./LogInOutButton/LogInOutButton";
import Image from 'next/image';
// import logo from "@/img/icons/youtube_icon.svg"
import { getUserSession } from "@/lib/session";
import MenuButton  from "../MenuButton/MenuButton"
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";

export default function Navbar() {
    console.log("NAVBAR")
    const [session, setSession] = useState(null);
    useEffect(() => {
        (async () => {
            const sessionData = await getUserSession(false);
            setSession(sessionData);
        })
    },[]);
    const global = useContext(GlobalStateContext);
    console.log(global);

    return (
        <div className="navbar bg-white fixed h-16 pl-0 top-0 left-18">
            <MenuButton outerContainer="cursor-pointer m-auto w-12 ml-3 hidden" innerContainer="flex flex-col hover:bg-gray-100 rounded-full p-4"/>

            <div className="flex-1">
                <a className="btn btn-ghost text-xl hover:bg-gray-100">
                    <span className="h-10"><Image className="w-fit h-full" src="/icons/youtube_icon.svg" width="30" height="30" alt="YoutubeLogo" /></span>
                    Youtube
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="YT" src={session? user.session : "/icons/silhouette.svg"} />
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