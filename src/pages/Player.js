import React from "react";
import { connect } from "react-redux";

const Player = ({ stateUser }) => {
    const user = stateUser?.user;

    return ( 
        <div className="player">
            <h1>Welcome to spotify {user?.display_name}</h1>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
      stateUser: state.user
    }
}
  
export default connect(mapStateToProps)(Player);