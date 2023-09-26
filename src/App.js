import './App.css';
import Home from "./views/Home/Home.jsx"
import About from "./views/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
// import Card from './components/card/Card.jsx';
// import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import Nav from "./components/Nav/Nav"
import { useState } from 'react';
import axios from "axios"
import { Routes, Route } from 'react-router-dom';



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
 const newCharacters = characters.filter(character => character.id !== parseInt(id))
   setCharacters(newCharacters);
}
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}
      <Nav onSearch={onSearch} onRandom={onRandom}/>
         <Routes>
            <Route path='/home' element=<Home characters={characters} onClose={onClose} /> />
            <Route path="/about" element=<About/> />
            <Route path='/detail/:id' element=<Detail/> />
         </Routes>
        

      </div>
   );
}

export default App;
