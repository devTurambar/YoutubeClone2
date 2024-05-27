import { apiRequest } from "@/lib/Axios"
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image';

const Search = () => {
    return (
        <div>
            <div className="form-control flex flex-row justify-center">
                <input type="text" placeholder="Search" className="input input-bordered w-28 md:w-auto rounded-tl-full rounded-bl-full focus:outline-offset-0 focus:outline-0 focus:border-solid focus:border-gray-300 focus:border-2" />
                <div className="border rounded-tr-full rounded-br-full pl-6 pr-6 flex items-center bg-slate-50 hover:bg-slate-100">
                    <Image src="/icons/magnifier.svg" width="24" height="24" alt="Search"/>
                </div>
            </div>  
        </div>
    );
}

export default Search;