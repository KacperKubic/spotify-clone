const baseLoginEndpoint = "https://accounts.spotify.com/authorize"
const clientId = "9ad1d68fb1b846118c50ac3241d5c368"
const redirectUri = "http://192.168.33.10:3000/"
const scopes = [
    "playlist-read-private",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
];

export const spotifyLoginUrl = `${baseLoginEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;