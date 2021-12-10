import React,{useState} from 'react';
import Layout2 from '../Components/Login';
import { Link } from "react-router-dom";

var axios=require('axios')

const Signup = () => {
  
  const [nameReg,setNameReg]=useState("");
  const [surnameReg,setSurnameReg]=useState("");
  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");
  const register=() => {
    axios.post("http://localhost:3001/users",{
      surname:surnameReg,
      name:nameReg,
      username:usernameReg,
      password:passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }
  return (
  <Layout2>
  <div className="signup">
    <h1>Sign up!</h1>
        <form className="formulaire">
            <ul>
                <input
                type="text"
                placeholder="Nom"
                name="surname"
                onChange={(e) => {setSurnameReg(e.target.value);
                }}
            />
            </ul> 
            <ul>
                <input
                type="text"
                placeholder="Prénom"
                name="name"
                onChange={(e) =>{setNameReg(e.target.value)
                }}
            />
            </ul>   
          <ul> 
            <input
            type="email"
            placeholder="Votre adresse mail"
            name="email"
            onChange={(e)=>{setUsernameReg(e.target.value)}}
          />
          </ul>
         <ul> 
          <input
            type="password"
            placeholder="Votre mot de passe"
            name="password"
            onChange={(e)=>{setPasswordReg(e.target.value)} }
          />
          </ul>
          <button className="submit" onClick={register}>
            <Link to="/" >Submit </Link>
          </button>
          <div className="change">
            <Link to="/">Déjà un compte?</Link>
          </div>
        </form>
  </div>
  </Layout2>
  )};

export default Signup;