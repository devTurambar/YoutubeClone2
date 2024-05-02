// 'use client'

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import UserPlaylists from "@/components/UserPlaylists/UserPlaylists";
import Navbar from "@/components/NavBar/NavBar";
import { getUserSession } from "../lib/session";

export default async function Page(){
    //client side session, useSession, uses the context API from React
    // const { data: session } = useSession();
    // if(!session){
    //     redirect("/");
    // }

    const user = await getUserSession();
    return(
        <div>
            <Navbar />
            <div>Olá, {user?.name}</div>
            <div>Dashboard</div>
            <div className="my-6">
            <UserPlaylists />
            </div>
        </div>
    )
}