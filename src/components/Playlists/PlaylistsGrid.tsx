"use client"
import { apiRequest } from "@/lib/Axios"
import { useQuery } from "@tanstack/react-query";
import style from "@/app/playlists/style.module.css"
import Link from "next/link";

const PlaylistsGrid = ({ list, context }: {list:object, context:string}) => {
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
    })
    // const global = useContext(GlobalStateContext);
    // console.log(global);
    if(error){
        return <h2>Msg de erro: {error.message}</h2>
    }

    if(data){
      console.log("data is")
      console.log("data",data)
        return(
            <div className={style.thumbnailsContainer}>
                {
                  data?.map((e:{id:string, snippet:{thumbnails:{high:{url:string}},title:string}},i:Number) => {
                    return(
                      <div key={`list-${i}`} className={style.videoThumbnails}>
                        {/* <Link href={{
                          pathname:"player",
                          query: {v:e?.id}
                        }}> */}
                          <img className="rounded-xl" src={e?.snippet?.thumbnails?.high?.url ?? "newImgUrl"} alt={e?.snippet?.title ?? "alt title"}/>
                        {/* </Link> */}
                        <div>
                          Description
                        </div>
                      </div>
                    )
                  })
                }              
            </div>
        )        
    }
    else{
      //do something in case no data
      return(
        <div>
          No data
        </div>
      )
    }

}

export default PlaylistsGrid;