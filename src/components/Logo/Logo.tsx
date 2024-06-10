import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="">
            <Link href="dashboard" className="btn btn-ghost text-xl hover:bg-gray-100">
                <span className="h-10"><Image className="h-full" src="/icons/youtube_icon.svg" width="30" height="30" alt="YoutubeLogo" /></span>
                <span className="text-lg">Youtube</span>
            </Link>
        </div>
    );
}

export default Logo;