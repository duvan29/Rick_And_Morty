import style from './Nav.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightFromBracket, faCircleUser, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.png'
import { useState } from 'react'

 

 const Nav = ({ logout }) => {

   const [menuHamburguesa, setMenuHamburguesa] = useState(false)

   const location = useLocation();

  // Si la ruta actual es '/', no mostramos la barra de navegación
  if (location.pathname === "/") {
    return null;
  }

   return (
      <>
     <nav className={style.nav}>
         <div className={style.logo}><img src={logo} alt=''/></div>
            {menuHamburguesa ? 
            <div className={style.items}>
               <NavLink className={style.linkMenu} to='/home'>
                  <div className={style.itemsDiv} onClick={() => setMenuHamburguesa(!menuHamburguesa)}><div> <FontAwesomeIcon icon={faHouse}/>  Home</div></div>
               </NavLink> 
               <NavLink className={style.linkMenu} to='/favorites'>
                  <div className={style.itemsDiv} onClick={() => setMenuHamburguesa(!menuHamburguesa)}><div><FontAwesomeIcon icon={faHeart} />  Favorites</div></div>
               </NavLink>
               <NavLink className={style.linkMenu} to='/about'>
                  <div className={style.itemsDiv} onClick={() => setMenuHamburguesa(!menuHamburguesa)}><div><FontAwesomeIcon icon={faCircleUser} />  About Me</div></div>
               </NavLink>
               <div onClick={()=>{setMenuHamburguesa(!menuHamburguesa);logout()}} className={style.itemsDiv}><div><FontAwesomeIcon icon={faRightFromBracket} />  Log Out</div></div>
            </div> : 
            <div className={style.item}>
               <NavLink className={style.linkMenu} to='/home'>
                  <div className={style.itemsDiv} ><div ><FontAwesomeIcon icon={faHouse}/>  Home</div></div>
               </NavLink> 
               <NavLink className={style.linkMenu} to='/favorites'>
                  <div className={style.itemsDiv} ><div ><FontAwesomeIcon icon={faHeart} />  Favorites</div></div>
               </NavLink>
               <NavLink className={style.linkMenu} to='/about'>
                  <div className={style.itemsDiv} ><div ><FontAwesomeIcon icon={faCircleUser} />  About Me</div></div>
               </NavLink>
               <div  onClick={logout} className={style.itemsDiv}><div><FontAwesomeIcon icon={faRightFromBracket} />  Log Out</div></div>
            </div>}
         <div onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
            <FontAwesomeIcon icon={faBars} className={style.menuBurger}/>
         </div>
      </nav>

      </>

      
   );
}

export default Nav;