import React from "react";
import { connect, useDispatch } from "react-redux";
import { setLocation } from "../actions";

const HomepagePlaylist = ({ playlist, spotify }) => {
    const dispatch = useDispatch();
    
    const setPlaylist = (id) => {
        spotify?.spotify.getPlaylist(id).then((response) => {
            dispatch({type: "SET_PLAYLIST", payload: response})
            dispatch(setLocation("playlist"))
        })
    }

    return ( 
        <div className="homepage-playlits" onClick={() => {setPlaylist(playlist.id)}}>
            <div key={playlist.id} className="homepage-playlist">
                <img src={playlist.images[0].url} alt=""/>
                <h4>{playlist.name}</h4>
                <p>{playlist.description}</p>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      spotify: state.spotify,
    }
}
  
export default connect(mapStateToProps)(HomepagePlaylist)
