"use client"
const youtubesearchapi = require("youtube-search-api");
const SearchResults = () => {
    const result = youtubesearchapi.GetListByKeyword("league",[false],[50],[{type:"video"}]);
    console.log(result);
    return(
        <div>
            Search Results
            {result}
        </div>
    )
}
export default SearchResults;   