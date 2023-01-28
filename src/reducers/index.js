import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import playlistsReducer from "./playlistsReducer"
import playlistReducer from "./playlistReducer"
import spotifyReducer from "./spotifyReducer"


export default combineReducers({
    token: tokenReducer,
    user: userReducer,
    playlists: playlistsReducer,
    playlist: playlistReducer,
    spotify: spotifyReducer
})