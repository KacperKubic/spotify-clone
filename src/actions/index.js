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

export const setCurrentSong = currentSong => {
    return{
        type: 'SET_CURRENT_SONG',
        payload: currentSong
    }
}

export const setPlaylistId = playlistId => {
    return{
        type: 'SET_PLAYLIST_ID',
        payload: playlistId
    }
}

export const setLocation = currentLocation => {
    return{
        type: 'SET_LOCATION',
        payload: currentLocation
    }
}

