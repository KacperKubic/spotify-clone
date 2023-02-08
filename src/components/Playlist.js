import React from "react";
import '../styles/Playlist.css';
import PageHeader from "./PageHeader";
import PlaylistInfo from "./PlaylistInfo";
import PlaylistSongs from "./PlaylistSongs";

const Playlist = () => {
    return(
        <div className="body">
            <PageHeader />
            <PlaylistInfo />
            <PlaylistSongs />
        </div>
    )
}

export default Playlist;