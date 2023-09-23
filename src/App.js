import './App.css';
// import Card from './components/card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import Nav from "./components/Nav/Nav"
import { useState } from 'react';
import axios from "axios"



function App() {

   const [characters, setCharacters] = useState([])

const onSearch = function (id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) =>{
      if(data.name){
         setCharacters([...characters, data])
      } else{
         window.alert("No hay personaje con ese ID!")
      }
   })
}


const onClose = (id) => {
   let key = parseInt(id)
 const newCharacters = characters.filter(character => character.id !== key)
   setCharacters(newCharacters);
}
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />

      </div>
   );
}

export default App;
