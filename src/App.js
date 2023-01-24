import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import { setToken, setUser } from "./actions";
import LoginPage from "./pages/LoginPage.js";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player";

const App = (state) =>{
  const dispatch = useDispatch();
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      window.location.hash = "";
      dispatch(setToken(token));
      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        dispatch(setUser(user))
      })

    }
  })

  return (
    <div className="app">
      {state.token ? <Player/> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  }
}

export default connect(mapStateToProps)(App);
