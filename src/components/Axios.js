

async function getApi() {

    const axios = require('axios');
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
    try {
        const response = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&mine=true&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
        console.log("HELLO");
        // setList(response.data.items);
        return response.data.items;
    }catch (error) {
        console.log(error);
        console.log("HELLO ERROR");
    }
}
  
  export default async function Axios () {
    const playlist = await getApi();
    console.log(playlist)
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