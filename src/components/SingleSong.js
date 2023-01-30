import React from "react";

const SingleSong = ({ song }) => {
    return ( 
        <div className="singleSong">
            <img src={song?.album.images[0].url} alt=""/>
            <div className="singleSong-info">
                <h1>{song.name}</h1>
                <p>
                    {song.artists.map((artist) => artist.name).join(", ")}
                </p>
                <p>
                    {song.album.name}
                </p>
            </div>
        </div>
    );
}
 
export default SingleSong;