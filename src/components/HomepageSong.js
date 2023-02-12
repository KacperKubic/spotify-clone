import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../actions";

const HomepageSong = ({ song }) => {
    const dispatch = useDispatch();

    const setSong = (id) => {
        dispatch(setCurrentSong(id))
    }

    return(
        <div className="homepage-song" onClick={() => {setSong(song?.id)}}>
            <img src={song?.album?.images[0]?.url} alt=""/>
            <h4>{song.name}</h4>
        </div>
    )
}

export default HomepageSong;