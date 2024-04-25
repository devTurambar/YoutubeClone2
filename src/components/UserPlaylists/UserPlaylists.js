import Axios from "../Axios";

const UserPlaylists = () => {
    return (
        <div className="flex flex-col">
            <span>
                Playlists
            </span>
            <Axios />
        </div>
    );
}

export default UserPlaylists;