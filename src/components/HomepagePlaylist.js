import React from "react";

const HomepagePlaylist = ({ playlist }) => {
    return ( 
        <div className="homepage-playlits">
            <div key={playlist.id} className="homepage-playlist">
                <img src={playlist.images[0].url} alt=""/>
                <h4>{playlist.name}</h4>
                <p>{playlist.description}</p>
            </div>
        </div>
     );
}
 
export default HomepagePlaylist;