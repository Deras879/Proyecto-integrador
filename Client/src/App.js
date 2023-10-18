import './App.css';
import Home from "./views/Home/Home.jsx"
import About from "./views/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Error404 from "./views/Error/Error404.jsx"
import Form from './components/Form/Form';
// import Card from './components/card/Card.jsx';
// import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import Nav from "./components/Nav/Nav"
import { useEffect, useState, } from 'react';
import axios from "axios"
import {Routes, Route, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';



function App() {
   const [access, setAccess] = useState(false)


   const EMAIL = "derycard59@gmail.com"
   const PASSWORD = "deras879."


   const navigate = useNavigate()


   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         console.log("se setea el acces a true");
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate("/");
   },[access]);

   const logOut = () => {
      setAccess(false);
      console.log("se setea el acces en false");
   }
   const [characters, setCharacters] = useState([])

const onSearch = function (id) {
   const characterExist = characters.find(character => character.id === parseInt(id))
   if(characterExist){
      window.alert("Ya existe ese personaje!")
   }else{
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
      <Nav onSearch={onSearch} onRandom={onRandom} logOut={logOut}/>
         <Routes>
         {/* <Route path={["/home", "/about", "/detail/:id"]} element={<Nav onSearch={onSearch} onRandom={onRandom}/>}/> */}

            {/* <Route path='/' element={<OutletRoutes />} /> */}
            <Route path="/" element=<Form onLogin={login}/> />
            <Route path='/home' element=<Home characters={characters} onClose={onClose} /> />
            <Route path="/about" element=<About/> />
            <Route path='/detail/:id' element=<Detail/> />
            <Route path="*" element={<Error404 />} />
            <Route path="/favorites" element={<Favorites />}/>
         </Routes>
        

      </div>

   );
}

export default App;
