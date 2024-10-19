"use client"
import { apiRequest } from "@/lib/Axios"
import { getUserSession } from "@/lib/session";
import { onlineManager, useQuery } from "@tanstack/react-query";
import Image from 'next/image';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useState, useRef } from "react";


// interface FormData {
// }

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const buttonRef = useRef<HTMLButtonElement>(null);


    // const router = useRouter();
    // const submitSearch = async(event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     router.push('/search')
    //     let str = event.target.elements.searchInput.value;
    //     let result = await apiRequest("https://www.googleapis.com/youtube/v3/search",{
    //         part: "snippet",
    //         q: str,
    //         maxResults:50,
    //     });
    // }

    const textChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    }
    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == "Enter"){
            buttonRef.current?.click();
            console.log("clickedss")
        }
    }

    return (
        <div>
            <div className="form-control flex flex-row justify-center" 
                >
                <input onKeyDown={keyDown} onChange={textChanged} name="searchInput" type="text" placeholder="Search" className="input input-bordered w-28 md:w-auto rounded-tl-full rounded-bl-full focus:outline-offset-0 focus:outline-0 focus:border-solid focus:border-gray-300 focus:border-2" />      
                <Link href={{
                    pathname:"/search",
                    query:{search}
                    }}
                >
                    <button type="submit" ref={buttonRef} className="border rounded-tr-full rounded-br-full pl-6 pr-6 flex items-center bg-slate-50 hover:bg-slate-100 cursor-pointer h-full">
                        <Image src="/icons/magnifier.svg" width="24" height="24" alt="Search"/>
                    </button>
                </Link>              
            </div>  
            {/* <div className="form-control flex flex-row justify-center">
                <input name="searchInput" type="text" placeholder="Search" className="input input-bordered w-28 md:w-auto rounded-tl-full rounded-bl-full focus:outline-offset-0 focus:outline-0 focus:border-solid focus:border-gray-300 focus:border-2"/>    
                <Link className="border rounded-tr-full rounded-br-full pl-6 pr-6 flex items-center bg-slate-50 hover:bg-slate-100 cursor-pointer" 
                    href={{
                        pathname:"/search",
                        query:{}
                    }}>
                    <Image src="/icons/magnifier.svg" width="24" height="24" alt="Search"/>
                </Link>                
            </div>   */}
        </div>
    );
}

export default SearchBar;