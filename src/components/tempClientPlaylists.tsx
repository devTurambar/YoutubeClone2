"use client"
import { apiRequest } from "@/lib/Axios"
import { useQuery } from "@tanstack/react-query";
const Temp = ({ playlists }) => {
    //One note that if using the hydration approach you should add refetchOnMount: false and refetchOnReconnect: false to the query options (inside the client component) so that the query is not re-fetched when the client is hydrated.
    const {data, error} = useQuery({
        queryKey: ["playlists"],
        queryFn: apiRequest,
        initialData: playlists,
        refetchOnMount: false, //This disables automatic data fetching when the component mounts. Since you already have initialData set, there's no need for immediate re-fetching.
        refetchOnReconnect: false, //Disables automatic re-fetching when the user reconnects to the internet (if the component was previously unmounted).
        // refetchInterval: false, //Disables periodic re-fetching of data at a set interval.
        // refetchIntervalInBackground: false, // Prevents re-fetching when the tab is not in focus.
        refetchOnWindowFocus: false, //Disables re-fetching when the browser window regains focus.
    })
    if(error){
        return <h2>Msg de erro: {error.message}</h2>
    }
    console.log(data);
    if(data){
        return(
            <div>
                <h1>Playlists Query</h1>
                <img src={data[0].snippet.thumbnails.high.url} alt={data[0].snippet.title}/>
            </div>
        )        
    }

}

export default Temp;