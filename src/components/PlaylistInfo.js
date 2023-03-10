import React from "react";
import { connect } from "react-redux";

const PlaylistInfo = ({ playlist }) => {
    //Component with playlist cover, name and description
    return ( 
        <div className="bodyInfo">
            <img src={playlist?.playlist?.images[0].url} alt=""/>
            <div className="bodyInfo-title">
                <strong>PLAYLIST</strong>
                <h2>{playlist?.playlist?.name}</h2>
                <p>{playlist?.playlist?.description}</p>
            </div>
        </div>
     );
}

 
const mapStateToProps = (state) => {
    return {
      playlist: state.playlist,
    }
  }
  
export default connect(mapStateToProps)(PlaylistInfo);