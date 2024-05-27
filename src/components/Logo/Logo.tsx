import Image from 'next/image';

const Logo = () => {
    return (
        <div className="">
            <a className="btn btn-ghost text-xl hover:bg-gray-100">
                <span className="h-10"><Image className="h-full" src="/icons/youtube_icon.svg" width="30" height="30" alt="YoutubeLogo" /></span>
                <span className="text-lg">Youtube</span>
            </a>
        </div>
    );
}

export default Logo;