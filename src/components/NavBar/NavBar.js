import LogInOutButton from "./LogInOutButton/LogInOutButton";
import Image from 'next/image';
import logo from "@/img/youtube_icon.svg"
import { getUserSession } from "@/app/lib/session";

export default async function Navbar() {
    const user = await getUserSession(true);
    console.log("uyser is ");
    console.log(user);

    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <span className="h-10"><Image className="w-fit h-full" src={logo} alt="YoutubeLogo" /></span>
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