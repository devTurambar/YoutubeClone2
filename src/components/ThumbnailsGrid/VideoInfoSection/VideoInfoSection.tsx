
import { apiRequest } from "@/lib/Axios";
interface Info{
    channelId: string,
    videoDescription: string
}
const VideoInfoSection = async ( {channelId, videoDescription} : Info) => {
    // let channel = await apiRequest("https://youtube.googleapis.com/youtube/v3/channels", {
    //     part: "snippet",
    //     id: channelId,
    //     key:process.env.YOUTUBE_API_KEY
    // }, true);
    console.log("videoinfosection");
    return (
        <div className="flex">
            <div>Logo2</div>
            {/* <div>{channelId}</div> */}
            <div>channelId</div>
            <div>Options</div>
        </div>
    )
}
export default VideoInfoSection;