import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginPage = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/users/login', values);
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
