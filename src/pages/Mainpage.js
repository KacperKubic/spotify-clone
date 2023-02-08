import React from "react";
import Sidebar from "../components/Sidebar";
import Homepage from "../components/Homepage";
import Search from "../components/Search";
import Library from "../components/Library";
import '../styles/Mainpage.css';
import Player from "../components/Player";
import { connect } from "react-redux";
import Playlist from "../components/Playlist";

const Mainpage = ({ currentLocation }) => {
    return ( 
        <div className="mainpage">
            <div className="mainpage-body">
                <Sidebar/>
                {currentLocation?.currentLocation === "Home" ? <Homepage /> :
                currentLocation?.currentLocation === "Search" ? <Search /> : 
                currentLocation?.currentLocation === "Library" ? <Library /> :
                currentLocation?.currentLocation === "playlist" ? <Playlist /> :  
                <Homepage />}
            </div>
            <Player/>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
      currentLocation: state.currentLocation
    }
  }
  
export default connect(mapStateToProps)(Mainpage);