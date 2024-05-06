import { apiRequest } from "@/components/Axios";
import style from "./style.module.css"
async function Playlists(){
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
    const playlists = await apiRequest(YOUTUBE_PLAYLIST_ITEMS_API, {
        part:"snippet,contentDetails",
        maxResults:50,
        mine:true,
        key:process.env.YOUTUBE_API_KEY
    });
    return(
        <div>
            <div>Hello playlists</div>
            <div className='flex justify-center'>
              <div className={style.thumbnailsContainer}>
                {
                  playlists?.map((e, i) => {
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
export default Playlists;