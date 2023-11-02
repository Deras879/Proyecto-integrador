import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

 const rootReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ADD_FAV:
        //    return {...state, myFavorites: [...state.myFavorites, action.payload], allCharacters: [...state.myFavorites, action.payload]}
           return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            // return {...state, myFavorites: state.myFavorites.filter((character) => character.id !== parseInt(action.payload))}
            return { ...state, myFavorites: payload};
        case FILTER: 
        if(payload === "Todos"){
            return {...state, myFavorites: state.allCharacters}
        }
        return {...state,myFavorites: state.allCharacters.filter((character) => character.gender === payload)};
        
        case ORDER: 
        if(payload === "A"){
            
            return {...state, myFavorites: state.myFavorites.sort((a, b) => a.id - b.id)}
        }else{
            return {...state, myFavorites: state.myFavorites.sort((a, b) => b.id - a.id)}
        }
        default:
            return {...state}
           
    }
}

export default rootReducer;