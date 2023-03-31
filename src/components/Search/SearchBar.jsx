import { useState } from 'react';
import style from './SearchBar.module.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faHeart, faChevronUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({onSearch}) {

let [id, idSet] = useState("");

const handleChange = (event) => idSet(event.target.value)

const location = useLocation();

  // Si la ruta actual es '/', no mostramos la barra de navegación
  if (location.pathname === "/about" || location.pathname === '/' || location.pathname === '/favorites') {
    return null;
  }

   return (
      <div> 
            <div className={style.search}>
               <input type='search' value={id} placeholder='Ex... 159'  onChange={handleChange}/>
               <div className={style.buscarButton} onClick={() => {onSearch(id); idSet("")}}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
               </div>
            </div>

         <br></br>
            <div className={style.wrapper}>

               <div className={style.iconRandom}>
                  <div className={style.tooltip}>
                     Random
                  </div>
                  <div className={style.randomButonIcon}  onClick={() => onSearch(Math.floor(Math.random() * 826))}>
                     <FontAwesomeIcon icon={faQuestion}/>
                  </div>
               </div> 
            </div>   
      </div>
   );
}
