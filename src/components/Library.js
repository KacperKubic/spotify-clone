import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setLocation } from "../actions";
import '../styles/Library.css'
import PageHeader from "./PageHeader"

const Library = ({ spotify }) => {
    const [playlists, setPlaylists] = useState([])
    const dispatch = useDispatch();

    const setPlaylist = (id) => {
        spotify?.spotify.getPlaylist(id).then((response) => {
            dispatch({type: "SET_PLAYLIST", payload: response})
            dispatch(setLocation("playlist"))
        })
    }

    useEffect(() => {
        spotify?.spotify.getUserPlaylists().then(response => {
            setPlaylists(response.items)
        })
    }, [spotify])

    return ( 
        <div className="library">
            <PageHeader />
            <h2>Your playlists</h2>
            <div className="playlists">
                {playlists.map((playlist) => {
                    return(
                        <div key={playlist.id} className="library-playlist" onClick={() => {setPlaylist(playlist.id)}}>
                            <img src={playlist.images[0].url} alt=""/>
                            <h4>{playlist.name}</h4>
                            <p>{playlist.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps)(Library);
