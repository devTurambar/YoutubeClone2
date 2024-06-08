interface Parameters{
    v:string
}
const Video = (p:Parameters) => {
    console.log(p.v)
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${p.v}`}/>
        </div>
    )
}
export default Video;