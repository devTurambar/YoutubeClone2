// "use client"
// import { useEffect, useState } from 'react';

async function getApi() {

  const axios = require('axios');
  const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
    try {
      const response = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLLyHBx6FRJC3BymwVJUiHN-eDXgZoqLQc&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`);
      // setList(response.data.items);
      return response.data.items;
    }catch (error) {
      console.log(error);
    }
}

//Componente que nao deve ser renderizado em server side..so we can debud youtube data response's
export default async function NoSSRComponent () {
  const playlist = await getApi();
  return(
      <div>
        <ul>
          {playlist.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
        {/* <ul>
          {list.map((item)=> {
            console.log("item", item);
          })}
        </ul> */}
      </div>
  )
}