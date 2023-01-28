import { Home, LibraryMusic, Search } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import '../styles/Sidebar.css';
import SidebarElement from "./SidebarElement";

const Sidebar = ({ playlists }) => {
    return(
        <div className="sidebar">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
            <SidebarElement title="Home" Icon={Home} />
            <SidebarElement title="Search" Icon={Search} />
            <SidebarElement title="Your Library" Icon={LibraryMusic} />
            <strong>PLAYLISTS</strong>
            <hr />
            {playlists?.playlists?.items?.map((playlist) => {
                return <SidebarElement key={playlist.id} playlist={playlist} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      playlists: state.playlists,
    }
}
  
export default connect(mapStateToProps)(Sidebar)
