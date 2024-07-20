// "use client"
import SearchResults from "@/components/Search/SearchResults";
import { apiRequest } from "@/lib/Axios";
import { getUserSession } from "@/lib/session";
import ThumbnailsGrid from "@/components/ThumbnailsGrid/ThumbnailsGrid";
import { Suspense } from "react";

const Search = async ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) =>{
    // const user = await getUserSession(true);
    let result = await apiRequest("https://www.googleapis.com/youtube/v3/search",{
        part: "snippet",
        q: searchParams.search,
        maxResults:50,
        key:process.env.YOUTUBE_API_KEY
    }, true);
    return(
        <div>
            Hello {searchParams.search}
            <div className='flex justify-center'>
                <SearchResults list={result} context="search"/>    
            </div>
        </div>
    );
}
export default Search;