import { apiRequest } from "@/lib/Axios";
import { getUserSession } from "@/lib/session";

import ThumbnailsGrid from "@/components/ThumbnailsGrid";
async function Playlists(){
    const user = await getUserSession(true);
    let playlists;
    //have to convert current date from miliseconds to seconds, thats why /1000
    if(user && user.expires_at > Date.now()/1000){
        const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
        playlists = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
            part:"snippet,contentDetails",
            maxResults:50,
            mine:true,
            key:process.env.YOUTUBE_API_KEY
        });
    }
    //TODO todo tratar o display se playlists existir mas for um objecto (error), e nao o array de items
    return(
        <div>
            <div>Hello playlists</div>
            <div className='flex justify-center'>
                {user && (user.expires_at > Date.now()/1000) ? (<ThumbnailsGrid list={playlists} context="playlists"/>) : "You need to login to acess this feature" }        
            </div>
        </div>
    );
}
export default Playlists;