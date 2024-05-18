import { apiRequest } from "@/lib/Axios";
import style from "./style.module.css"
import Temp from "@/components/ThumbnailsGrid";
async function PlaylistsLayout({children}){
    return(
        <div>
            {children}
        </div>
    );
}
export default PlaylistsLayout;