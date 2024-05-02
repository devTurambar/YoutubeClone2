import { getSession } from "next-auth/react";
import LogInOutButton from "./LogInOutButton/LogInOutButton";
// import Image from 'next/image';

export default async function Navbar() {
    const user = await getSession();
    console.log(user);
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    {/* <Image src="@/imgyoutube_icon.svg" /> */}
                    Youtube Clone
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                        <LogInOutButton logged={user ? true : false}/>             
                    </li>
                    {/* <li>
                        {((user != null) ? (<button onClick={() => signOut()}>Logout</button>) : (<button onClick={() => signIn()}>Login</button>))}                      
                    </li> */}
                </ul>
                </div>
            </div>
        </div>
    );

}