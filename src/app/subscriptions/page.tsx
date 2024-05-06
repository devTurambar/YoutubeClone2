import { apiRequest } from "@/components/Axios";
import style from "./style.module.css"

const Subscriptions = async() => {
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/subscriptions";
    const subs = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
        part:"snippet,contentDetails",
        maxResults:50,
        mine:true,
        key:process.env.YOUTUBE_API_KEY
    });
    return(
        <div>
            <div>Hello Subscriptions</div>
            <div className='flex justify-center'>
              <div className={style.thumbnailsContainer}>
                {
                  subs?.map((e, i) => {
                    return(
                      <div key={i} className={style.videoThumbnails}>
                        <img src={e.snippet.thumbnails.high.url} alt={e.snippet.title}/>
                      </div>
                    )
                  })
                }              
              </div>             
            </div>
        </div>
    );
}
export default Subscriptions;