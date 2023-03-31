import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import SearchBar from './components/Search/SearchBar';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeFav } from './redux/actions/actions';


export function App({ removeFav }) {

   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPasswo1';

   const onSearch = (id) => {
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            
            if(characters.find(character => character.id === data.id))
               window.alert(`ID ${data.id} ya existe`);
            else setCharacters((oldChars) => [...oldChars, data]);

         } else if (!data.id) window.alert('ID vacio');
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(() => alert(`Character ${id} not found`));
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id!==id));
      removeFav(parseInt(id));
   };

   const logout = () => {
      setAccess(false);
      navigate(`/`);
   };

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else window.alert('El usuario o Constraseña es incorrecta')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
      <Nav logout = {logout}/>
      <SearchBar onSearch = {onSearch}/>
         <Routes>
            <Route path= "/" element= {<Form login={login}/>}/>
            <Route path= "/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>} /> 
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}


export function mapDispatchToProps(dispatch) {
   return {
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
