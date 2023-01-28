import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import SingleSong from "./SingleSong";

const BodySongs = ({ playlist }) => {
    return ( 
        <div className="bodySongs">
                <div className="bodySongs-icons">
                    <PlayCircleFilled className="icons-play"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz/>
                </div>
                {playlist?.playlist?.tracks.items.map((item) => {
                    return <SingleSong key={item.id} song={item.track}/>
                })}
            </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      playlist: state.playlist,
    }
  }
  
export default connect(mapStateToProps)(BodySongs);