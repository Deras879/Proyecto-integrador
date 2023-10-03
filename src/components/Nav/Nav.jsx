import React from "react"
// import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link, useLocation} from "react-router-dom";
import style from "./Nav.module.css"

function Nav (props) {

    const location = useLocation();
    const rutaValida = /^\/(home|favorites|about|(detail\/\d+))$/;

    if (!rutaValida.test(location.pathname)){
        return null;
    }
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

// export default Nav;
export default Nav;
