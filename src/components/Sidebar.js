import { Home, LibraryMusic, Search } from "@mui/icons-material";
import React, { useState } from "react";
import { connect } from "react-redux";
import '../styles/Sidebar.css';
import SidebarElement from "./SidebarElement";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Sidebar = ({ playlists }) => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle)

    return(
        <div className={toggle ? "sidebar-active" : "sidebar"}>
            <div className="toggled">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
                {toggle ? <ArrowBackIosIcon className="sidebar-icon" onClick={handleClick}/> : <ArrowForwardIosIcon className="sidebar-icon" onClick={handleClick}/> }
            </div>
            <div className={toggle ? "sidebar-items" : "sidebar-items-active"}>
                <SidebarElement title="Home" Icon={Home}/>
                <SidebarElement title="Search" Icon={Search} />
                <SidebarElement title="Library" Icon={LibraryMusic} />
                <strong className="sidebar-title">PLAYLISTS</strong>
                <hr />
                {playlists?.playlists?.items?.map((playlist) => {
                    return <SidebarElement key={playlist.id} playlist={playlist} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      playlists: state.playlists,
    }
}
  
export default connect(mapStateToProps)(Sidebar)
