import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setLoding] = useState (true);
  const [character, setCharacter] = useState({});

  //!AXIOS
  useEffect(() => {
    axios(`https://server-rick-and-morty-7xlt.onrender.com/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoding(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (isLoading) {
   return <div>Loading...</div>
  }

  const { name, status, species, gender, origin, image } = character;

  return (
    
    <div className={style.conteiner}>
      <div className={style.conteinerCard}>
        <div className={style.titleAndX}>
          <div className={style.titleId}><h1>PORTAL LICENSE</h1></div>
          <div onClick={() => navigate(-1)} className={style.equisX}><FontAwesomeIcon icon={faX}/></div>
        </div>
        
        <div className={style.propiedades}> 
      
          <img src={image} alt="" />
          <div >
            <h1>{name}</h1>
            <h3>STATUS: {status}</h3>
            <h3>SPECIES: {species}</h3>
            <h3>GENDER: {gender}</h3>
            <h3>ORIGIN: {origin.name}</h3>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Detail;
