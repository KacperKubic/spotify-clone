import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import { setPlaylists, setToken, setUser, setSpotify } from "./actions";
import LoginPage from "./pages/LoginPage.js";
import SpotifyWebApi from "spotify-web-api-js";
import Mainpage from "./pages/Mainpage";
import { getTokenFromResponse } from "./spotifyConfig";

const App = ({ token }) =>{
  const dispatch = useDispatch();
  const spotify = new SpotifyWebApi();

  //Use effect that run on first page load, take the access token out of website url, set spotity web api access token and dispatch loggined user, playlists and base playlist
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if(_token){
      dispatch(setToken(_token));
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(setUser(user))
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })

      dispatch(setSpotify(spotify));
    }
  })


  //If there is an access token display Mainpage if not display Loginpage
  return (
    <div className="app">
      {token?.token ? <Mainpage/> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(App);
