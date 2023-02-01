import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { setPlaylistId } from "../actions";
import SingleSong from "./SingleSong";

const BodySongs = ({ playlist }) => {
    const dispatch = useDispatch()

    const playlistId = (id) => {
      dispatch(setPlaylistId(id));
    }

    return ( 
        <div className="bodySongs">
                <div className="bodySongs-icons">
                    <PlayCircleFilled className="icons-play" onClick={() => {playlistId(playlist?.playlist?.id)}}/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz/>
                </div>
                {playlist?.playlist?.tracks.items.map((item) => {
                    return <SingleSong key={item.track.id} song={item.track}/>
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