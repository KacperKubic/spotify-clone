const playlistReducer = (playlist = null, action) => {
    switch(action.type){
        case 'SET_PLAYLIST':
            return {...playlist, playlist: action.payload}
        default:
            return playlist;
    }
}

export default playlistReducer;
