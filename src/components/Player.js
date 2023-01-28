import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import React from "react";
import '../styles/Player.css';

const Player = () => {
    return(
        <div className="player">
            <div className="player-left">
                <img src="" alt=""/>
                <div className="player-songInfo">
                    <h4>Hey Yeah!</h4>
                    <p>Outcast</p>
                </div>
            </div>
            <div className="player-center"> 
                <Shuffle className="player-icon--green" />
                <SkipPrevious className="player-icon" />
                <PlayCircleOutline fontSize="large" className="player-icon" />
                <SkipNext className="player-icon" />
                <Repeat className="player-icon--green" />
            </div>
            <div className="player-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Player;