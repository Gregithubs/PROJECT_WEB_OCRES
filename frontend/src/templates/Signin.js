import React,{useState} from 'react';
import { Formik } from 'formik';
import Layout2 from '../Components/Login';
import { Link } from "react-router-dom";


const Signin = () => {
  return(
  <Layout2>
  <div className="login">
    <h1>Sign in!</h1>
    <Formik
      initialValues={{ email: 'Entrez votre mail', password: 'Password' }}
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
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </ul>
          <ul>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </ul>
          <button className="submit" disabled={isSubmitting}>
            Valider
          </button>
          <div className="change">
            <Link to="/signup">Pas de compte?</Link>
          </div>
        </form>
      )}
    </Formik>
  </div>
  </Layout2>
  )};

export default Signin;