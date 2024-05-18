import LogInOutButton from "./LogInOutButton/LogInOutButton";
import Image from 'next/image';
// import logo from "@/img/icons/youtube_icon.svg"
import { getUserSession } from "@/lib/session";

export default async function Navbar() {
    const user = await getUserSession(true);

    return (
        <div className="navbar bg-white fixed h-16 pl-0">
            <div className={`cursor-pointer m-auto flex flex-col w-20`}>
                <div className={`bar1`}></div>
                <div className={`bar2`}></div>
                <div className={`bar3`}></div>
            </div> 
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <span className="h-10"><Image className="w-fit h-full" src="/icons/youtube_icon.svg" width="40" height="40" alt="YoutubeLogo" /></span>
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
                    <img alt="YT" src={user? user.image : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
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