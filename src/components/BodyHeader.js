//import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const BodyHeader = ({ user }) => {
    return ( 
        <div className="bodyHeader">
            {/*<div className="bodyHeader-left">
                <Search />
                <input placeholder="Search..." type="text"/>
            </div>*/}
            <div className="bodyHeader-right">
                <Avatar src={user?.user?.images[0]?.url} alt="" />
                <h4>{user?.user?.display_name}</h4>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
  }
  
export default connect(mapStateToProps)(BodyHeader);