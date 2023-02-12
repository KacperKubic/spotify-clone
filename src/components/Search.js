import React, { useEffect, useState } from "react";
import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { connect } from "react-redux";
import SingleSong from "./SingleSong"
import PageHeader from "./PageHeader"

const Search = ({ spotify }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const search = () => {
            spotify?.spotify.searchTracks(searchValue, {limit: 10}).then((response) => {
                setSearchResults(response.tracks.items)
            })
        }

        const timeoutId = setTimeout(() => {
            if(searchValue){
                search()
            }else(
                setSearchResults([])
            )
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [searchValue, spotify])

    return ( 
        <div className="search">
            <div className="search-header">
                <PageHeader />
            </div>
            <div className="search-input">
                <SearchIcon/>
                <input placeholder='Search for your favourite songs' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} type="text"/>
            </div>
            {searchResults ? <div className="search-results">
                {searchResults.map((item) => {
                    return <SingleSong key={item.id} song={item}/>
                })}
            </div> : null}

        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      spotify: state.spotify,
    }
  }
  
  export default connect(mapStateToProps)(Search);
  