import React, { useState, useEffect } from "react";
import '../styles/Player.css';
import SpotifyPlayer from "react-spotify-web-playback";
import { connect } from "react-redux";


const Player = ({ token, currentSong, playlistId }) => {
    const [play, setPlay] = useState(false);
    const [dataType, setDataType] = useState("track");
    const [songs, setSongs] = useState(null);

    //On change of currentSong or PlaylistId state set different datatype and song to put in player URIS
    useEffect(() => {
        setPlay(true)
        setDataType("track")
        setSongs(currentSong?.currentSong)
    }, [currentSong])

    useEffect(() => {
        setPlay(true)
        setDataType("playlist")
        setSongs(playlistId?.playlistId)
    }, [playlistId])
    

    return(
        <div className="player">
           {/*Spotify Web Player component*/}
           <SpotifyPlayer 
            token={token?.token} 
            uris={currentSong || playlistId ? [`spotify:${dataType}:${songs}`] : []} 
            play={play} 
            callback={state => {if(!state.isPlaying) setPlay(false)}} 
            styles={{
                bgColor: "#282828",
                color: '#f2f2f2',
                sliderColor: '#1db954',
                trackNameColor: '#f2f2f2',
            }}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
      currentSong: state.currentSong,
      playlistId: state.playlistId
    }
}
  
export default connect(mapStateToProps)(Player)