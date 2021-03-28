import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signUp } from '../../services/auth';
import './login.css';
import workshop from '../../icons/workshop2.jpeg'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null)
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp({username, email, avatar, bio, password})
      if (user) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateAvatar = (e) => {
    const image = e.target.files[0]
    setAvatar(image);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <div className='login' style={{background:'url('+workshop+') no-repeat center center fixed', backgroundSize: 'cover', height: '1148px'}}>
    <div className='formDiv'>
    <form className='loginForm' onSubmit={onSignUp}>
      <div>
        <input
          className='input inputButton'
          type="text"
          name="username"
          onChange={updateUsername}
          placeholder="Username"
          value={username}
        ></input>
      </div>
      <div>
        <input
          className='input inputButton'
          type="text"
          name="email"
          onChange={updateEmail}
          placeholder="Email"
          value={email}
        ></input>
      </div>
      <div className='uploadDiv'>
        <label>Upload an avatar:</label>
        <input
          className='upload'
          type="file"
          name="avatar"
          accept="image/*"
          placeholder="Avatar"
          onChange={updateAvatar}
        ></input>
      </div>
      <div>
        <textarea
          className='input inputButton'
          name="bio"
          onChange={updateBio}
          placeholder="Biography"
          value={bio}
        ></textarea>
      </div>
      <div>
        <input
          className='input inputButton'
          type="password"
          name="password"
          onChange={updatePassword}
          placeholder="Password"
          value={password}
        ></input>
      </div>
      <div>
        <input
          className='input inputButton'
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Repeat Password"
          required={true}
        ></input>
      </div>
      <button className='button' type="submit">Sign Up</button>
    </form>
    </div>
    </div>
    <div className='footer'>
    </div>
    </>
  );
};

export default SignUpForm;
