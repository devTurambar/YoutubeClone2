// 'use client'

import dynamic from "next/dynamic";
import LoginForm from "../components/LoginForm";
// import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getUserSession } from "../lib/session";
import ThumbnailsGrid from "@/components/ThumbnailsGrid/ThumbnailsGrid";
import { apiRequest } from "@/lib/Axios";

// Import a component without SSR
// const NoSSRComponent = dynamic(() => import("./NoSSRComponent/page"), {
//   ssr: false, // This line is key!
// });



// export default async function Home({ data }) {
//    const { data: session } = useSession();
// if(session && session.user){
//   redirect("/dashboard");
// }
export default async function Home() {
  const user = await getUserSession(true);
  if(user){
    redirect("/dashboard");
  }

  let popular = await apiRequest("https://www.googleapis.com/youtube/v3/videos", {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    maxResults:5,
    regionCode: "US",
    key:process.env.YOUTUBE_API_KEY
  }, true);
      let channel = await apiRequest("https://youtube.googleapis.com/youtube/v3/channels", {
        part: "snippet",
        id: "UCS5R_abGJziuxS0rJymOvSg",
        key:process.env.YOUTUBE_API_KEY
    }, true);

  return (
    <main>
      <ThumbnailsGrid list={popular} context="popular"/>
    </main>
  );
}
