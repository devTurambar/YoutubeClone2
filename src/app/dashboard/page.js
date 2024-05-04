import UserPlaylists from "@/components/UserPlaylists/UserPlaylists";
import { getUserSession } from "../lib/session";

export default async function Page(){
    //client side session, useSession, uses the context API from React
    // const { data: session } = useSession();
    // if(!session){
    //     redirect("/");
    // }
    const user = await getUserSession(true);
    return(
        <div>
            <div>Olá, {user?.name}</div>
            <div>Dashboard</div>
            <div className="my-6">
            <UserPlaylists />
            </div>
        </div>
    )
}