import React,{useState} from 'react';
import Layout2 from '../Components/Login';
import { Link } from "react-router-dom";
var axios=require('axios');

const Signin = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const login=() =>{
    axios.get("http://localhost:3001/users",{
      username:username,
      password:password,
    }).then((response) =>{
      console.log(response.data);
    });
  }
  return(
  <Layout2>
  <div className="signup">
    <h1>Sign in!</h1>
        <form className="formulaire">
          <ul> 
            <input
            type="email"
            placeholder="Votre adresse mail"
            name="email"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          </ul>
         <ul> 
          <input
            type="password"
            placeholder="Votre mot de passe"
            name="password"
            onChange={(e)=>{setPassword(e.target.value)} }
          />
          </ul>
          <button className="submit" onClick={login}>
            Submit
          </button>
          <div className="change">
            <Link to="/signup">Pas de compte?</Link>
          </div>
        </form>
      )
  </div>
  </Layout2>
  )};

export default Signin;