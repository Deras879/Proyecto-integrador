import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

function Nav (props) {
    return(
     <div className={style.container}>
        <div>
       <Link to={"/home"}>
         <button className={style.btn}>Home</button>
        </Link>
        <Link to={"/favorites"}>
         <button className={style.btn}>Favoritos</button>
        </Link>
        <Link to={"/about"} className={style.button}>
         <button className={style.btn}>About</button>
        </Link>

        </div>
 
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom}/>
    </div>

)}

export default Nav;