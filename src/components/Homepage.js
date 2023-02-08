import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import '../styles/Homepage.css'
import HomepagePlaylist from "./HomepagePlaylist";
import HomepageSong from "./HomepageSong";
import PageHeader from "./PageHeader";

const Homepage = ({ spotify }) => {
    const [firstSectionTitle, setFirstSectionTitle] = useState("")
    const [secondSectionTitle, setSecondSectionTitle] = useState("")
    const [songs, setSongs] = useState([]);
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        if(hour >= 4 && hour < 12){
            setFirstSectionTitle("Good morning")
        }else if(hour >= 12 && hour < 19){
            setFirstSectionTitle("Good afternoon")
        }else{
            setFirstSectionTitle("Good evening")
        }

        spotify?.spotify.getMyTopTracks({limit: 6}).then(response => {
            setSongs(response.items)
        })

        spotify?.spotify.getFeaturedPlaylists({limit: 7, country: 'US'}).then(response => {
            setFeaturedPlaylists(response.playlists.items)
            setSecondSectionTitle(response.message)
        })
    }, [spotify])

    return ( 
        <div className="homepage">
            <PageHeader />
            <div className="homepage-session-one">
                <h2>{firstSectionTitle}</h2>
                <div className="session-one-items">
                    {songs.map((song) => {
                        return <HomepageSong key={song.id} song={song} />
                    })}
                </div>
            </div>
            <div className="homepage-session-two">
                <h2>{secondSectionTitle}</h2>
                <div className="session-two-items">
                    {featuredPlaylists.map((playlist) => {
                        return <HomepagePlaylist key={playlist.id} playlist={playlist} />
                    })}
                </div>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps)(Homepage);
