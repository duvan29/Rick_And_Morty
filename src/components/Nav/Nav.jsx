import style from './Nav.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightFromBracket, faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.png'


 const Nav = ({ logout }) => {

   const location = useLocation();

  // Si la ruta actual es '/', no mostramos la barra de navegación
  if (location.pathname === "/") {
    return null;
  }

   return (
     <nav className={style.nav}>
         <div className={style.logo}><img src={logo} alt=''/></div>
            <div className={style.items}>
               <NavLink className={style.linkMenu} to='/home'>
                  <div className={style.itemsDiv}><h2><FontAwesomeIcon icon={faHouse}/>  Home</h2></div>
               </NavLink> 
               <NavLink className={style.linkMenu} to='/favorites'>
                  <div className={style.itemsDiv}><h2><FontAwesomeIcon icon={faHeart} />  Favorites</h2></div>
               </NavLink>
               <NavLink className={style.linkMenu} to='/about'>
                  <div className={style.itemsDiv}><h2><FontAwesomeIcon icon={faCircleUser} />  About Me</h2></div>
               </NavLink>


               <div onClick={logout} className={style.itemsDiv}><h2><FontAwesomeIcon icon={faRightFromBracket} />  Log Out</h2></div>
         </div>  
      </nav>
   );
}

export default Nav;