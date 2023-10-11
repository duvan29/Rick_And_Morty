import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './types'
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'https://server-rick-and-morty-7xlt.onrender.com/rickandmorty/fav';       
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character)
      try {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
       } catch (error) {
         window.alert(error)
       }     
    };
}

 export const removeFav = (id) => {
    const endpoint = 'https://server-rick-and-morty-7xlt.onrender.com/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const { data } = await axios.delete(endpoint);
       try {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
       });
       } catch (error) {
         window.alert(error)
       }
    };
}

export const filterCards = (gender) => {
    return (
        {type: FILTER, payload: gender}
    )
}

export const orderCards = (order) => {
    return (
        {type: ORDER, payload: order}
    )
}
