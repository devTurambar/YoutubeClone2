import SearchResults from "@/components/Search/SearchResults";
import { apiRequest } from "@/lib/Axios";
import { getUserSession } from "@/lib/session";
import ThumbnailsGrid from "@/components/ThumbnailsGrid";
import { Suspense } from "react";

const Search = async ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) =>{
    const user = await getUserSession(true);
    let result;
    //have to convert current date from miliseconds to seconds, thats why /1000
    if(user && user.expires_at > Date.now()/1000){
            result = await apiRequest("https://www.googleapis.com/youtube/v3/search",{
            part: "snippet",
            q: searchParams.search,
            maxResults:50,
        });
    }
    return(
        <div>
            Hello {searchParams.search}
            <div className='flex justify-center'>
                <Suspense>
                    {user && (user.expires_at > Date.now()/1000) ? (<ThumbnailsGrid list={result} context="search"/>) : "You need to login to acess this feature" }        
                </Suspense>
            </div>
        </div>
    );
}
export default Search;