import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styles from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [isLoading, setLoding] = useState (true);
  const [character, setCharacter] = useState({});

  //!AXIOS
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
    <div>
      <h1>{name}</h1>
      <h3>STATUS: {status}</h3>
      <h3>SPECIES: {species}</h3>
      <h3>GENDER: {gender}</h3>
      <h3>ORIGIN: {origin.name}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default Detail;
