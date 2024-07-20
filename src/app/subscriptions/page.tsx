import { apiRequest } from "@/lib/Axios";
import ThumbnailsGrid from "@/components/ThumbnailsGrid/ThumbnailsGrid";
import { getUserSession } from "@/lib/session";

const Subscriptions = async() => {
    const user = await getUserSession(true);
    let subs;
    //have to convert current date from miliseconds to seconds, thats why /1000
    if(user && user.expires_at > Date.now()/1000){
        const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/subscriptions";
        subs = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
            part:"snippet,contentDetails",
            maxResults:50,
            mine:true,
            key:process.env.YOUTUBE_API_KEY
        });  
    }

    return(
        <div>
            <div>Hello Subscriptions</div>
            <div className='flex justify-center'> 
                {user && (user.expires_at > Date.now()/1000) ? (<ThumbnailsGrid list={subs} context="subs"/>) : "You need to login to acess this feature" }           
            </div>
        </div>
    );
}
export default Subscriptions;