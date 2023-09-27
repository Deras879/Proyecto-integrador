import React, { useState } from "react";
import style from "./SearchBar.module.css"
// import { useState } from "react"


export default function SearchBar(props) {

   const [id, setId] = useState("");
   const handleChange = function(event) {
      setId(event.target.value)
   }

   const handleKey = (event) => {
      if(event.key === "Enter"){
         props.onSearch(id)
         setId("")
      }
   }

   const handleClick = () =>{
      props.onSearch(id)
      setId("");
   }
   return (
      <div className={style.container}>
         <input className={style.input} placeholder="Introduzca un ID" value={id} type="text"  onChange={handleChange} onKeyDown={handleKey}/>
         <button className={style.btn} onClick={() => handleClick()}>Agregar</button>
         <button className={style.btn} onClick={() => props.onRandom()}>Random</button>
      </div>
   );
}
