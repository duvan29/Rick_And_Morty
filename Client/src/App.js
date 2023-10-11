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
   const onSearch = async (id) => {
      
      try {
         const { data } = await axios(`https://server-rick-and-morty-7xlt.onrender.com/rickandmorty/character/${id}`)
         if (data.name) {
            if(characters.find(character => character.id === data.id))
                  window.alert(`ID ${data.id} ya existe`);
            else setCharacters((oldChars) => [...oldChars, data]);
            }
      } catch (error) {
         switch (error.request.status) {
            case 404:
               window.alert('ID vacio');
               break;
            // case 500:
            //    window.alert(`¡No hay personajes con el ID ${id}!`);
            //    break;
            default:
               window.alert(`¡No hay personajes con el ID ${id}!`);
               break;
         }
      }
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id!==id));
      removeFav(parseInt(id));
   };

   const logout = () => {
      setAccess(false);
      navigate(`/`);
   };



   const login = async (userData) => {
      const { email, password } = userData;
      try {   
         const URL = 'https://server-rick-and-morty-7xlt.onrender.com/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         window.alert('Email or Password incorrect')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
      <Nav logout = {logout}/>
      
         <Routes>
            <Route path= "/" element= {<Form login={login}/>}/>
            <Route path= "/home" element= {<><SearchBar onSearch = {onSearch}/><Cards characters={characters} onClose={onClose}/></>}/>
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
