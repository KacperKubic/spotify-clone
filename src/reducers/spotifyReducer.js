const spotifyReducer = (spotify = null, action) => {
    switch(action.type){
        case 'SET_SPOTIFY':
            return {...spotify, spotify: action.spotify}
        default:
            return spotify;
    }
}

export default spotifyReducer;
