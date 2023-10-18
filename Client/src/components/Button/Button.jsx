import React from "react"
import style from "./Button.module.css"


export default function boton(props){
    return(
        <button onClick={props.onClick} className={style.Btn}>
  
            <div className={style.sign}><svg viewBox="0 0 512 512"> <path d="M499.3 81.1c-12.5-12.5-32.8-12.5-45.3 0L256 210.7 58.7 81.1c-12.5-12.5-32.8-12.5-45.3 0-12.5 12.5-12.5 32.8 0 45.3L210.7 256 13.4 453.3c-12.5 12.5-12.5 32.8 0 45.3 6.3 6.3 14.5 9.4 22.7 9.4s16.4-3.1 22.7-9.4L256 301.3l197.3 197.3c6.3 6.3 14.5 9.4 22.7 9.4s16.4-3.1 22.7-9.4c12.5-12.5 12.5-32.8 0-45.3L301.3 256l197.3-197.3c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></div>

            <div className={style.text}>Cerrar</div>
        </button>
    )
}







