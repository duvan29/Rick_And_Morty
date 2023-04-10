import React from 'react';
import validate from '../../validation';
import style from './Form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock, faRightToBracket, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'
import form from '../img/form.png' 

const Form = ({login}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const [userData, setUserData] = React.useState({
        email: '',
        password: ''
     });

    const [errors, setErrors] = React.useState({
        email: '',
        password: ''
      })

    const handleChange = (event) => {

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value,
         })
      );

        setUserData({
            ...userData,
            [event.target.name]: event.target.value
          })

        
    }

    const handleSubmit = (event) => { 
        event.preventDefault();
        login(userData)
    };



    return (
        <div className={style.fondo}> 
        <div className={style.logo}><img src={form} alt=''/></div>
        <div className={style.formularioContent}>
            
            <form className={style.formulario} onSubmit={handleSubmit}>
                <label className={style.formLabel} htmlFor="email">USER</label>

                    <div className={style.inputIconUser}>
                        <FontAwesomeIcon icon={faUser} style={{color: "#D99748",  fontSize: '35px', position: 'relative', zIndex: '100'}}/>
                        <input type="email" className={style.formInput2} name="email" value={userData.email} onChange={handleChange} placeholder='Enter your email'/>
                        
                    </div>
                    <p className={style.formP}>{errors.email}</p>


                <label className={style.formLabel} htmlFor="password">PASSWORD</label>
            
                    <div>
 
                        <div className={style.inputIconEye}>
                            <FontAwesomeIcon icon={faLock} style={{color: "#D99748", fontSize: '35px', position: 'relative',zIndex: '100'}}/>

                            <input className={style.formInput} type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={handleChange} placeholder='Enter your password'/>
                            
                            <div onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FontAwesomeIcon icon={faEye} style={{ fontSize: '30px', position: 'relative', color: "#D99748",  cursor: 'pointer', zIndex: '200'}}  /> : <FontAwesomeIcon icon={faEyeSlash} style={{fontSize: '30px', position: 'relative', color: "#D99748",  cursor: 'pointer', zIndex: '100'}} /> }
                            </div>
                        </div>
                        <p className={style.formP}>{errors.password}</p>
                    </div>


                <button className={style.formButton} type="submit"><FontAwesomeIcon icon={faRightToBracket} style={{color: "#ffffff", fontSize: '25px', position: 'relative' }}/> LOGIN</button>
            </form>
        </div>
        </div>
    );
}


export default Form;
