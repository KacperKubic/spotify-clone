const playlistsReducer = (playlists = [], action) => {
    switch(action.type){
        case 'SET_PLAYLISTS':
            return {...playlists, playlists: action.payload}
        default:
            return playlists;
    }
}

export default playlistsReducer;
