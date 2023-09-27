
import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"


const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter(null);
     }, [id]);

    return(

     <div >
        {character ? (
        <div className={style.majorContainer}>
            <div className={style.info}>
                <h2 className={style.name} data-text={character.name}>{character.name}</h2>
                <h2 className={style.status} data-text="Status:">Status: {character.status}</h2>
                <h2 className={style.species} data-text="Species">Species: {character.species}</h2>
                <h2 className={style.gender}>Gender: {character.gender}</h2>
                <h2 className={style.origin}>Origin: {character.origin.name}</h2>
            </div>
            <div>
                <img className={style.img} src={character.image} alt="" />
            </div>
     
        </div>


        ): (
        <p>Cargando...</p>
        )}
 
     </div>
 
    )
}

export default Detail;