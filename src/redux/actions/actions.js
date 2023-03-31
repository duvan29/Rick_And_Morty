import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './types'


export const addFav = (personaje) => {
    return({type: ADD_FAV, payload: personaje})
}

export const removeFav = (id) => {
    return ({type: REMOVE_FAV, payload: id })
}

export const filterCards = (gender) => {
    return ({type: FILTER, payload: gender })
}

export const orderCards = (order) => {
    return ({type: ORDER, payload: order })
}