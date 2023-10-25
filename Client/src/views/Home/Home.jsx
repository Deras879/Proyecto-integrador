import React from "react";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css"

const Home = (props) => {
    return(
    <div className={style.container}>
        
         <Cards characters={props.characters} onClose={props.onClose}  />
    </div>
   
    )
}

export default Home;