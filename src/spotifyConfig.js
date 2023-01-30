const baseLoginEndpoint = "https://accounts.spotify.com/authorize"
const clientId = "9ad1d68fb1b846118c50ac3241d5c368"
const redirectUri = "http://192.168.33.10:3000/"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const spotifyLoginUrl = `${baseLoginEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;