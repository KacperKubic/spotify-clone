import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../actions";

const SingleSong = ({ song }) => {
    const dispatch = useDispatch();

    const setSong = (id) => {
        dispatch(setCurrentSong(id))
    }
    
    return ( 
        <div className="singleSong" onClick={() => {setSong(song.id)}}>
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