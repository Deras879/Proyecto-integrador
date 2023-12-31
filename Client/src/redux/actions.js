import axios from "axios"
export const ADD_FAV ="ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

// export const addFav = (id) => {
//     return (dispatch) => {
//         fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((res) => res.json())
//         .then((data) => dispatch({type: ADD_FAV, payload: data}));
//     };
// };

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    
    try {
       return async (dispatch) => {
         await axios.post(endpoint, character).then(({ data }) => {
             return dispatch({
                type: ADD_FAV,
                payload: data,
             });
          });
       };
       
    } catch (error) {
      window.alert(error.message)
    }
    
 };

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    
    try {
       return async (dispatch) => {
          await axios.delete(endpoint).then(({ data }) => {
             return dispatch({
                type: REMOVE_FAV,
                payload: data,
          });
          });
       };
      
    } catch (error) {
      window.alert(error.message)
    }
    
 };

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender }
};

export const orderCards = (orden) => {
    return {type: ORDER, payload: orden}
};