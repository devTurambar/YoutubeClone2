import Video from "@/components/Video/Video";

interface Parameters{
    v:string
}

const Player = async ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: Parameters 
  }) =>{
    console.log(typeof searchParams.v);
    const aux = searchParams.v;
    return(
        <div>
            <Video v={searchParams.v}/>
        </div>
    )
}
export default Player;