import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import '../styles/Library.css'

const Library = ({ spotify }) => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        spotify?.spotify.getUserPlaylists().then(response => {
            setPlaylists(response.items)
        })
    }, [spotify])

    return ( 
        <div className="library">
            {playlists.map((playlist) => {
                return(
                    <div key={playlist.id} className="library-playlist">
                        <img src={playlist.images[0].url} alt=""/>
                        <h4>{playlist.name}</h4>
                        <p>{playlist.description}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps)(Library);
