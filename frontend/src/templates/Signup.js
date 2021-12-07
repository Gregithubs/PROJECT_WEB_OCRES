import React,{useState} from 'react';
import { Formik } from 'formik';
import Layout2 from '../Components/Login';
import { Link } from "react-router-dom";
import { Axios } from 'axios';

const Signup = () => {
  const [nameReg,setNameReg]=useState("");
  const [surnameReg,setSurnameReg]=useState("");
  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");
  const register=() =>{
    Axios.post("http//localhost:3001/users",{
      surname:surnameReg,
      name:nameReg,
      username:usernameReg,
      password:passwordReg,
    }).then((response) =>{
      console.log(response);
    });
  }
  return(
  <Layout2>
  <div className="signup">
    <h1>Sign up!</h1>
    <Formik
      initialValues={{surname:"Nom",name:"Prénom", email: 'Entrez votre mail', password: 'Password' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className="formulaire">
            <ul>
                <input
                type="surname"
                name="surname"
                onChange={handleChange,(e) => {setSurnameReg(e.target.value);
                }}
                onBlur={handleBlur}
                value={values.surname} 
            />
            {errors.surname && touched.surname && errors.surname}
            </ul> 
            <ul>
                <input
                type="name"
                name="name"
                onChange={handleChange,setNameReg}
                onBlur={handleBlur}
                value={values.name} 
            />
            {errors.name && touched.name && errors.name}
            </ul>   
          <ul> 
            <input
            type="email"
            name="email"
            onChange={handleChange,setUsernameReg}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </ul>
         <ul> 
          <input
            type="password"
            name="password"
            onChange={handleChange,setPasswordReg}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </ul>
          <button className="submit" disabled={isSubmitting}>
            Submit
          </button>
          <div className="change">
            <Link to="/">Déjà un compte?</Link>
          </div>
        </form>
      )}
    </Formik>
  </div>
  </Layout2>
  )};

export default Signup;