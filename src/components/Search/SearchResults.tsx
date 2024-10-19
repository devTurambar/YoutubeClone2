"use client"
import { apiRequest } from "@/lib/Axios"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "@/app/search/style.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchResults = ({ list, context }: {list:object, context:string}) => {
    const [v, setV] = useState("");

    // useEffect(() => )
    const queryClient = useQueryClient();

    // queryClient.resetQueries({ queryKey:[context], exact: true })


    //One note that if using the hydration approach you should add refetchOnMount: false and refetchOnReconnect: false to the query options (inside the client component) so that the query is not re-fetched when the client is hydrated.
    const {data, error} = useQuery({
        queryKey: [context],
        queryFn: apiRequest,
        initialData: list,
        refetchOnMount: false, //This disables automatic data fetching when the component mounts. Since you already have initialData set, there's no need for immediate re-fetching.
        refetchOnReconnect: false, //Disables automatic re-fetching when the user reconnects to the internet (if the component was previously unmounted).
        refetchInterval: false, //Disables periodic re-fetching of data at a set interval.
        refetchIntervalInBackground: false, // Prevents re-fetching when the tab is not in focus.
        refetchOnWindowFocus: false, //Disables re-fetching when the browser window regains focus.
        // gcTime: 0,
    });

    // Function to check the cached data
    const checkCachedData = async() => {
        const cachedData = queryClient.getQueryData(['search']);
        console.log('Cached Data:', cachedData);
        queryClient.clear();
        // await queryClient.refetchQueries();
    };

    if(error){
        return <h2>Msg de erro: {error.message}</h2>
    }
    if(data){
        console.log("data",data);
        console.log("initialDat",list);
        // checkCachedData();
        return(
            <div className="flex flex-col gap-4">
                <button onClick={checkCachedData}>CLICK TO REFETCH</button>
                {
                    list && !(list instanceof Error) ? (
                        list.map((e:{id:{kind:string, videoId:string},snippet:{thumbnails:{high:{url:string}},description:string,title:string}},i:Number) => {
                        return(
                            <div className="flex gap-4" key={`list-${i}`}>
                                <div className="flex flex-[2_2] gap-2">
                                    <div className={style.videoThumbnails}>
                                        <Link href={{
                                            pathname:"/player",
                                            query: {v:e?.id?.videoId}
                                        }}
                                        >
                                            <img className="rounded-lg" src={e?.snippet?.thumbnails?.high?.url ?? "newImgUrl"} alt={e?.snippet?.title ?? "alt title"}/>
                                        </Link>
                                    </div>
                                    <div className={style.videoDescriptions}>
                                        <div className="text-base">{e?.snippet?.title}</div>
                                        <div className="text-xs">{e?.snippet?.description}</div>
                                    </div>
                                </div>
                                {/* <div className="flex-[1_1]">
    
                                </div> */}
                            </div>
                        )
                      })
                    )
                    : "ERROR"
                }              
            </div>
        )        
    }
}
export default SearchResults;   