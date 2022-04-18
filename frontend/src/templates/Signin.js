import React,{useState} from 'react';
import Layout2 from '../Components/Login';
import { Link } from "react-router-dom";
import Loading from '../Components/Loading';
import ErrorMessage from '../Components/ErrorMessage';
var axios=require('axios');

const Signin = () =>  {
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(false);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const login= async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers:{
          "Content-type":"application/json"
        },
      };
      setLoading(true);
      const {data}=await axios.post('http://localhost:3001/users/login',{
        username,
        password
    },
    config
    );

    localStorage.setItem('userInfo',JSON.stringify(data));
    setLoading(false)
    window.location = "http://localhost:3000/home";
   } catch(error){
     setError(error.response.data.message);
     setLoading(false)

    }
  }
  return (
  <Layout2>
  <div className="signup">
    {error && <ErrorMessage/>}
    {loading && <Loading/>}
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
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          </ul>
          <button className="submit" onClick={login}>
            Submit
          </button>
          <div className="change">
            <Link to="/signup">Pas de compte?</Link>
          </div>
        </form>
  </div>
  </Layout2>
  )};

export default Signin;