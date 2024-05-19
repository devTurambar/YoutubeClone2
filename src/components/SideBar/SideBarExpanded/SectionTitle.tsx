"use client"
import Image from "next/image";
const SectionTitle = ({title}:{title:string}) => {
    return (
        <div className="flex">
            <div className="text-base">{title}</div>
            <Image src="/icons/icon-right.svg" width="16" height="16" alt="Arrow"></Image>       
        </div>

    );
}

export default SectionTitle;