'use client'

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import UserPlaylists from "@/components/UserPlaylists/UserPlaylists";
import Navbar from "@/components/NavBar/NavBar";

export default function Page(){

    const { data: session } = useSession();

    if(!session){
        redirect("/");
    }

    return(
        <div>
            <Navbar />
            <div >Olá, {session?.user?.name}</div>
            <div>Dashboard</div>
            <div className="my-6">
                {/* <UserPlaylists /> */}
            </div>
        </div>
    )
}