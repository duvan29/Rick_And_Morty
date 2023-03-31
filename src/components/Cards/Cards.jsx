import Card from '../Card/Card';
import style from './Cards.module.css'

 const Cards = ({ characters, onClose }) => { // [{....}, {....}, {...}]
   return (
      <div className={style.cardContainer}>
         {
            characters.map(({ id, name, image, gender, species, status, origin }) => {
            return <Card 
               key={id}
               id={id}
               status={status}
               species={species}
               origin={origin.name}
               name={name}
               image = {image}
               gender = {gender}
               onClose = {() => onClose(id)}
               />
            })
         }
      </div>
   );
} 

export default Cards;

