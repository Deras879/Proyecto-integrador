import React from "react"
import SearchBar from "../SearchBar/SearchBar"

function Nav (props) {
    return <div>
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom}/>
    </div>

}

export default Nav;