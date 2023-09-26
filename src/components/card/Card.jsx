import React from "react";
import style from "./card.module.css"
import Boton from "../Button/Button.jsx"
import { Link } from "react-router-dom";



export default function Card(props) {
   return (
      <Link to={`/detail/${props.id}`} className={style.link}>
            <div className={style.container}>
       <Boton className={style.btn} onClick={() => props.onClose(props.id)}/>
         <h2 className={style.name}>{props.name}</h2>
         <img className={style.img} src={props.image} alt='' />
       

         <div className={style.info}>
            <h2 className={style.status}>Status: {props.status}</h2>
            <h2 className={style.species}>Species: {props.species}</h2>
            <h2 className={style.gender}>Gender: {props.gender}</h2>
            <h2 className={style.origin}>Origin: {props.origin}</h2>
         </div>
      
      
      </div>
      </Link>

   );
}




