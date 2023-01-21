import React from "react";
import '../styles/LoginPage.css'
import { spotifyLoginUrl } from "../spotifyConfig";

const LoginPage = () => {
    return ( 
        <div className="login-page">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
            <a href={spotifyLoginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
     );
}
 
export default LoginPage;