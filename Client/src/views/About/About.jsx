import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.text}>Acerca de</h1>

      <h2>La página</h2>
      <h3>
        Esta página es un dock de cartas basado en la serie de Rick and Morty,
        cuenta con un apartado de logeo, una vista home donde se puede buscar
        personajes por si id, una vista detalle que permite visualizar al
        completo los detalles de un personaje
      </h3>
    </div>
  );
};

export default About;
