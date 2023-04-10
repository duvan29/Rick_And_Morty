import { Link, useLocation } from 'react-router-dom'
import { removeFav, addFav } from '../../redux/actions/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import style from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faHeart, faIdCard } from '@fortawesome/free-solid-svg-icons'


export function Card(props) {
   const { pathname } = useLocation();

   const [isFav, setIsfav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav) {
         setIsfav(false);
         props.removeFav(props.id);
      } else {
         setIsfav(true);
         props.addFav(props);
      }
   };
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsfav(true);
         }
      });
   }, [props.myFavorites]);
   
      return (
         <div>
         <div className={style.cardDiv}>
            {isFav ? (<div className={style.divCorazon2} onClick={handleFavorite}><FontAwesomeIcon icon={faHeart}/></div>) : (<div className={style.divCorazon} onClick={handleFavorite}><FontAwesomeIcon icon={faHeart}/>
         </div>)}
         { (pathname !== "/favorites") ? (<div className={style.divX}  onClick={() => props.onClose() }><FontAwesomeIcon icon={faX} onClick={props.onClose}/></div>) : (<div className={style.divX2}><FontAwesomeIcon icon={faX}/></div>)}
         <img src={props.image} alt={props.name} className={style.imgCard}/>

         <div className={style.divCardName}>
            <h2 className={style.cardName}>{props.name}</h2>
         </div>
         
         <h2 className={style.cardID}>{props.id}</h2>
            <Link to = {`/detail/${props.id}`} >
         <div className={style.masInfo}><FontAwesomeIcon icon={faIdCard} /></div>
            </Link>
      </div>
      </div>
      );
   }
   
   export function mapDispatchToProps(dispatch) {
      return {
         addFav: (personaje) => dispatch(addFav(personaje)),
         removeFav: (id) => dispatch(removeFav(id))
      }
   }
   
   export function mapStateToProps(state) {
      return {
         myFavorites: state.myFavorites
      }
   }
   
   export default connect(mapStateToProps, mapDispatchToProps)(Card);