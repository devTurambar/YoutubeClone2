'use client'

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Page(){

    const { data: session } = useSession();

    if(!session){
        redirect("/");
    }

    return(
        <div>
            <div>Olá, {session?.user?.name}</div>
            <div>Dashboard</div>
            <button className="button button-secondary" onClick={() => signOut()} >Sign Out</button>
        </div>
    )
}