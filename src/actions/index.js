export const setToken = token => {
    return{
        type: 'SET_TOKEN',
        payload: token,
    }
}

export const setUser = user => {
    return{
        type: 'SET_USER',
        payload: user,
    }
}

export const setPlaylists = playlists => {
    return{
        type: 'SET_PLAYLISTS',
        payload: playlists
    }
}

export const setPlaylist = playlist => {
    return{
        type: 'SET_PLAYLIST',
        payload: playlist
    }
}

export const setSpotify = spotify => {
    return{
        type: 'SET_SPOTIFY',
        payload: spotify
    }
}



