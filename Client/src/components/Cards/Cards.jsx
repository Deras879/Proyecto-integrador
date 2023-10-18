import Card from '../card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   return <div className={style.container}>
      {props.characters.map((character, index) => {
         return(<Card    
            className={style.card}     
            key={index + 1}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            png={character.png}
            onClose={props.onClose}/>);
      })}
      
   </div>;
}
