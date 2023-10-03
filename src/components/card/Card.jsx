import React from "react";
import style from "./card.module.css"
// import Boton from "../Button/Button.jsx"
import { Link } from "react-router-dom";



export default function Card(props) {
   return (

      
  
        <div className={style.container}>
           {/* <Boton className={style.Btn} onClick={() => props.onClose(props.id)}/> */}

           <button className={style.Btn}  onClick={() => props.onClose(props.id)}>
  
  <div className={style.sign}><svg viewBox="0 0 512 512"> <path d="M499.3 81.1c-12.5-12.5-32.8-12.5-45.3 0L256 210.7 58.7 81.1c-12.5-12.5-32.8-12.5-45.3 0-12.5 12.5-12.5 32.8 0 45.3L210.7 256 13.4 453.3c-12.5 12.5-12.5 32.8 0 45.3 6.3 6.3 14.5 9.4 22.7 9.4s16.4-3.1 22.7-9.4L256 301.3l197.3 197.3c6.3 6.3 14.5 9.4 22.7 9.4s16.4-3.1 22.7-9.4c12.5-12.5 12.5-32.8 0-45.3L301.3 256l197.3-197.3c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></div>

  <div className={style.text}>Cerrar</div>
</button>
         

            <img className={style.img} src={props.image} alt='' />
           <Link to={`/detail/${props.id}`} className={style.link}>
            <h2 className={style.name}>{props.name}</h2>
            </Link> 
          
        
{/*     
         <div className={style.info}>
            <h2 className={style.status}>Status: {props.status}</h2>
            <h2 className={style.species}>Species: {props.species}</h2>
            <h2 className={style.gender}>Gender: {props.gender}</h2>
            <h2 className={style.origin}>Origin: {props.origin}</h2>
         </div> */}
          
  

      
      </div>
      

   );
}




