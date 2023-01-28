import React from "react";
import '../styles/Body.css';
import BodyHeader from "./BodyHeader";
import BodyInfo from "./BodyInfo";
import BodySongs from "./BodySongs";

const Body = () => {
    return(
        <div className="body">
            <BodyHeader />
            <BodyInfo />
            <BodySongs />
        </div>
    )
}

export default Body;