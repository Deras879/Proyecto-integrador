import React from "react";
import Cards from "../../components/Cards/Cards";

const Home = (props) => {
    return(
    <div>
         <Cards characters={props.characters} onClose={props.onClose}  />
    </div>
   
    )
}

export default Home;