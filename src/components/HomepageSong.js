import React from "react";

const HomepageSong = ({ song }) => {
    return(
        <div className="homepage-song">
            <img src={song?.album?.images[0]?.url} alt=""/>
            <h4>{song.name}</h4>
        </div>
    )
}

export default HomepageSong;