import React from 'react';
import { Formik } from 'formik';
import Layout from '../Components/layout';

const Signup = () => (
  <Layout>
  <div className="signup">
    <h1>Sign in!</h1>
    <Formik
      initialValues={{surname:"",name:"", email: 'entrez votre mail', password: 'entrez votre mot de passe' }}
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
      }}
    >
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
                Nom :
                <input
                type="surname"
                name="surname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name} 
            />
            {errors.surname && touched.surname && errors.surname}
            </ul> 
            <ul>
                Prénom :
                <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name} 
            />
            {errors.name && touched.name && errors.name}
            </ul>   
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
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  </Layout>
);

export default Signup;