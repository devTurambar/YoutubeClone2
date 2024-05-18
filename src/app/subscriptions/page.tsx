import { apiRequest } from "@/lib/Axios";
import style from "./style.module.css"
import ThumbnailsGrid from "@/components/ThumbnailsGrid";

const Subscriptions = async() => {
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/subscriptions";
    const subs = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
        part:"snippet,contentDetails",
        maxResults:50,
        mine:true,
        key:process.env.YOUTUBE_API_KEY
    });
    console.log(subs);
    return(
        <div>
            <div>Hello Subscriptions</div>
            <div className='flex justify-center'>
              <ThumbnailsGrid list={subs} context="subs"/>            
            </div>
        </div>
    );
}
export default Subscriptions;