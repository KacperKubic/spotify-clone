import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { setPlaylistId } from "../actions";
import SingleSong from "./SingleSong";

const PlaylistSongs = ({ playlist }) => {
    const dispatch = useDispatch()

    //Dispatch playlistId on click on playbuttton
    const playlistId = (id) => {
      dispatch(setPlaylistId(id));
    }

    return ( 
        <div className="bodySongs">
                <div className="bodySongs-icons">
                    <PlayCircleFilled className="icons-play" onClick={() => {playlistId(playlist?.playlist.id)}}/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz/>
                </div>
                {/*Map through playlist and display SingleSong component for each track on the playlist*/}
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
  
export default connect(mapStateToProps)(PlaylistSongs);