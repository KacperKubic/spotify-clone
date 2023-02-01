const currentSongReducer = (currentSong = null, action) => {
    switch(action.type){
        case 'SET_CURRENT_SONG':
            return {...currentSong, currentSong: action.payload}
        default:
            return currentSong;
    }
}

export default currentSongReducer;
