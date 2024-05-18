import { apiRequest } from "@/lib/Axios";

import ThumbnailsGrid from "@/components/ThumbnailsGrid";
async function Playlists(){
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
    const playlists = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
        part:"snippet,contentDetails",
        maxResults:50,
        mine:true,
        key:process.env.YOUTUBE_API_KEY
    });
    console.log(playlists);
    //TODO todo tratar o display se playlists existir mas for um objecto (error), e nao o array de items
    return(
        <div>
            <div>Hello playlists</div>
            <div className='flex justify-center'>
                <ThumbnailsGrid list={playlists} context="playlists"/>        
            </div>
        </div>
    );
}
export default Playlists;