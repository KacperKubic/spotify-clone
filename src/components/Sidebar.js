import { Home, LibraryMusic, Search } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import '../styles/Sidebar.css';
import SidebarElement from "./SidebarElement";

const Sidebar = ({ playlists }) => {
    return(
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarElement title="Home" Icon={Home} />
            <SidebarElement title="Search" Icon={Search} />
            <SidebarElement title="Your Library" Icon={LibraryMusic} />
            <strong className="sidebar-title">PLAYLISTS</strong>
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
