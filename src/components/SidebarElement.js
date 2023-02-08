import React from "react";
import { connect, useDispatch } from "react-redux";
import { setLocation } from "../actions";

const SidebarElement = ({ spotify, playlist, title, Icon }) => {
    const dispatch = useDispatch();

    //On click on specific sidebar playlist dispatch playlist 
    const setPlaylist = (id) => {
        spotify?.spotify.getPlaylist(id).then((response) => {
            dispatch({type: "SET_PLAYLIST", payload: response})
            dispatch(setLocation("playlist"))
        })
    }

    const setCurrentLocation = (location) => {
        dispatch(setLocation(location))
    }

    return ( 
        <div className="sidebarElement">
            {Icon && <Icon className="sidebarElement-icon" onClick={() => {setCurrentLocation(title)}}/>}
            {Icon ? <h4 onClick={() => {setCurrentLocation(title)}}>{title}</h4> : <p onClick={() => {setPlaylist(playlist.id)}}>{playlist.name}</p>}
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      spotify: state.spotify,
    }
  }
  
export default connect(mapStateToProps)(SidebarElement);