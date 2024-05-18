"use client"
import React from "react";
import Link from 'next/link';
// import home from "@/img/icons";
import Image from "next/image";

interface SideBarButtonProps {
    text: string,
    action: string
}
  
const SideBarButton: React.FC<SideBarButtonProps> = (SideBarButtonProps) => {
    return(
        <div className="text-yt-sidebar-text cursor-pointer hover:bg-gray-100 rounded-md">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-14">
                <Image src={`/icons/${SideBarButtonProps.text.toLowerCase()}.svg`} alt="Home" width="24" height="24">
                </Image>
            </div>
            <Link href={`${SideBarButtonProps.action}`}>
                <div className="text-center text-xxs font-normal ">{SideBarButtonProps.text}</div>
            </Link> 
        </div>
    );
}
export default SideBarButton;