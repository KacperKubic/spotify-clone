import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import '../styles/Mainpage.css';
import Player from "../components/Player";

const Mainpage = () => {
    return ( 
        <div className="mainpage">
            <div className="mainpage-body">
                <Sidebar/>
                <Body/>
            </div>
            <Player/>
        </div>
     );
}

export default Mainpage;