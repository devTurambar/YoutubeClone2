import { getUserSession } from '@/app/lib/session';
import { getServerSession } from 'next-auth';
// import {handler} from "@app/api/auth/[...nextauth]"
async function getApi() {
  const user = await getUserSession();
    const axios = require('axios');
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
    // const YOUTUBE_PLAYLIST_ITEMS_API = "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlists.list";
    try {
        const response = await axios.get(YOUTUBE_PLAYLIST_ITEMS_API, {
          headers: {
            "x-access-token": user.accessToken,
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${user.accessToken}`
          },
          params: {
            part:"snippet,contentDetails",
            maxResults:50,
            mine:true,
            key:process.env.YOUTUBE_API_KEY
          }
        })
        // const response = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&mine=true&key=${process.env.YOUTUBE_API_KEY}`);
        // const response = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=${process.env.YOUTUBE_API_KEY}`);

        console.log("HELLO");
        console.log(response.data.items);
        // setList(response.data.items);
        return response.data.items;
    }catch (error) {
      console.log("ERROR")
        console.log(error);
    }
}
  
  export default async function Axios () {
    const user = await getUserSession();
    const playlist = await getApi();
    // console.log(JSON.stringify(user)+" user")
    return(
        <div>
            Hello Mine Playlist
          {/* <ul>
            {playlist.map((e) => (
              <li key={e.id}>{e.name}</li>
            ))}
          </ul> */}
          {/* <ul>
            {list.map((item)=> {
              console.log("item", item);
            })}
          </ul> */}
        </div>
    )
  }