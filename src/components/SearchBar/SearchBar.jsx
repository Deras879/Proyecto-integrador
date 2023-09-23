import React, { useState } from "react";
import style from "./SearchBar.module.css"
// import { useState } from "react"


export default function SearchBar(props) {

   const [id, setId] = useState("");
   const handleChange = function(event) {
      setId(event.target.value)
   }
   return (
      <div className={style.container}>
         <input className={style.input}  type="text"  onChange={handleChange} />
         <button className={style.btn} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
