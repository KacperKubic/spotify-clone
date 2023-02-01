const playlistIdReducer = (playlistId = null, action) => {
    switch(action.type){
        case 'SET_PLAYLIST_ID':
            return {...playlistId, playlistId: action.payload}
        default:
            return playlistId;
    }
}

export default playlistIdReducer;
