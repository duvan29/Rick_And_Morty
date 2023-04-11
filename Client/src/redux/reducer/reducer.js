import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from '../actions/types'

const initialState = {
    myFavorites: [],
    allCharacters: [],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_FAV:
        //    return {
        //         ...state,
        //         myFavorites: [...state.allCharacters, action.payload],
        //         allCharacters: [...state.myFavorites, action.payload]
        //    }

        // REDUCER | ADD_FAV
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };

        // case REMOVE_FAV:
        //     const newList = state.myFavorites.filter((elemento) => elemento.id !== action.payload);
        //     return {
        //         ...state,
        //         myFavorites: newList
        //    }   

        // REDUCER | REMOVE_FAV
        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload 
            };

        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
            }

        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "A" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) =>  b.id - a.id)
            }
                            
        default:
           return {...state}
    }
};

export default rootReducer;

/*export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, null)(Favorites);*/
