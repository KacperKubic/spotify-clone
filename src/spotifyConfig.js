const baseLoginEndpoint = "https://accounts.spotify.com/authorize"
const clientId = "9ad1d68fb1b846118c50ac3241d5c368"
const redirectUri = "https://kacper-kubic-spotify-clone.vercel.app/"
const scopes = [
    "playlist-read-private",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

//Spotify login URL with all all scopes, redirectUri and client id
export const spotifyLoginUrl = `${baseLoginEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;