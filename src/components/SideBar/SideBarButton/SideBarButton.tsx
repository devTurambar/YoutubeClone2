"use client"
import React from "react";
import Link from 'next/link'
interface SideBarButtonProps {
    text: string,
    action: string
}
  
const SideBarButton: React.FC<SideBarButtonProps> = (SideBarButtonProps) => {
    return(
        <div className="text-gray-400 hover:text-red-700">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-14">
                <i className="fa fa-house"></i>
            </div>
            <Link href={`${SideBarButtonProps.action}`}>
                <div className="text-center text-xs font-normal ">{SideBarButtonProps.text}</div>
            </Link> 
        </div>
);
}
export default SideBarButton;