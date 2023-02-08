import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import playlistsReducer from "./playlistsReducer";
import playlistReducer from "./playlistReducer";
import spotifyReducer from "./spotifyReducer";
import currentSongReducer from "./currentSongReducer";
import playlistIdReducer from "./playlistIdReducer";
import locationReducer from "./locationReducer";


export default combineReducers({
    token: tokenReducer,
    user: userReducer,
    playlists: playlistsReducer,
    playlist: playlistReducer,
    spotify: spotifyReducer,
    currentSong: currentSongReducer,
    playlistId: playlistIdReducer,
    currentLocation: locationReducer,
})