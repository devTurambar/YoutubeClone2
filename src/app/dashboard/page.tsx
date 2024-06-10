import ThumbnailsGrid from "@/components/ThumbnailsGrid";
import { getUserSession } from "../../lib/session";
import { apiRequest } from "@/lib/Axios";

export default async function Page(){
    //client side session, useSession, uses the context API from React
    // const { data: session } = useSession();
    // if(!session){
    //     redirect("/");
    // }

    let popular = await apiRequest("https://www.googleapis.com/youtube/v3/videos", {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults:50,
        regionCode: "US",
        key:process.env.YOUTUBE_API_KEY
    }, true);


    const user = await getUserSession(true);
    return(
        <>
            <div>
                Olá, {user?.name}
            </div>
            <ThumbnailsGrid list={popular} context="popular"/>
            <div className="myModal">
            </div>
        </>
    )
}