import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer';
import './login.css';
import workshop from '../../icons/workshop.jpeg';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <div className='login' style={{background:'url('+workshop+') no-repeat center center fixed', backgroundSize: 'cover', height: '1148px'}}>
      <div className='formDiv'>
      <form className='loginForm' onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
            ))}
        </div>
        <div>
          <label 
          htmlFor="email"></label>
          <input
            className='input inputButton'
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            />
        </div>
        <div>
          <label 
          htmlFor="password"></label>
          <input
            className='input inputButton'
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            />
        </div>
          <button className='button inputButton' type="submit">Log In</button>
      </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LoginForm;
