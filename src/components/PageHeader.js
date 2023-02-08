import { Avatar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const PageHeader = ({ user }) => {
    //Component with user avatar and username
    return ( 
        <div className="bodyHeader">
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
  
export default connect(mapStateToProps)(PageHeader);