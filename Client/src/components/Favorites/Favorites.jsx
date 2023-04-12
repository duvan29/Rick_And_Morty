import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderCards, filterCards } from '../../redux/actions/actions'

export default function Favorites() {

   const { myFavorites } = useSelector(state => state);
   
   const dispatch = useDispatch();

   const handleOrder = (event) =>{
      dispatch(orderCards(event.target.value))
   }

   const handleFilter = (event) =>{
      dispatch(filterCards(event.target.value))
   }

   return (
   <div>
      <div className={style.textFavoritos}>
            <h1>
               Favoritos
            </h1>
      </div>
      <div className={style.filterOrder}>
         <select onChange={handleOrder}>
            <option value='order' disabled='disabled'>Order By</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendiente</option>
         </select>

         <select onChange={handleFilter}>
            <option value='filter' disabled='diseabled'>Filter By</option>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
         </select>
      </div>
      <div className={style.cardContainer}>
         {  
          myFavorites.map((elemento) => {  
           return <Card
            id={elemento.id}
            name={elemento.name}
            image={elemento.image}
            />
        })} 
   </div> 
   </div>  
   );
}