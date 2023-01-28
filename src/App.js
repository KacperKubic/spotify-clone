import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import { setPlaylist, setPlaylists, setToken, setUser, setSpotify } from "./actions";
import LoginPage from "./pages/LoginPage.js";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Mainpage from "./pages/Mainpage";

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

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })

      spotify.getPlaylist('37i9dQZEVXcOcJN2mLpnk7').then((response) => {
        dispatch(setPlaylist(response))
      })

      dispatch(setSpotify(spotify))

    }
  })


  return (
    <div className="app">
      {state.token ? <Mainpage/> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(App);
