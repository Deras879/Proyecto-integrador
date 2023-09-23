import './App.css';
// import Card from './components/card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import Nav from "./components/Nav/Nav"
import { useState } from 'react';
import axios from "axios"



function App() {

   const [characters, setCharacters] = useState([])

const onSearch = function (id) {
   const characterExist = characters.find(character => character.id === parseInt(id))
   if(characterExist){
      window.alert("Ya existe ese personaje!")
   }else{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) =>{
         if(data.name){
           setCharacters([...characters, data])
       } else{
          window.alert("No hay personaje con ese ID!")
       }
    })
      .catch(error => {
         window.alert("No hay personaje con ese ID")
      })
   } 
}

const onRandom = () => {
   let randomId = Math.floor(Math.random() * 826 + 1)
   onSearch(randomId);
}


const onClose = (id) => {
   let key = parseInt(id)
 const newCharacters = characters.filter(character => character.id !== key)
   setCharacters(newCharacters);
}
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}
         <Nav onSearch={onSearch} onRandom={onRandom}/>
         <Cards characters={characters} onClose={onClose}  />

      </div>
   );
}

export default App;
