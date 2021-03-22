import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { signUpUser } from '../../store/session'
import {useDispatch} from 'react-redux'
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null)
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch()
  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp({username, email, avatar, bio, password})
      // setErrors([])
      // let newErrors = []
      // dispatch(signUpUser({ username, email, password, avatar, bio }))
      //  .then(() => {
      //               setUsername("");
      //               setEmail("");
      //               setAvatar(null);
      //               setBio('')
      //               setPassword("");
      //               setRepeatPassword('')
      //           })
      //           .catch(async (res) => {
      //               const data = await res.json();
      //               if (data && data.errors) {
      //                   newErrors = data.errors;
      //                   setErrors(newErrors);
      //               }
      //           });
      setUsername('')
      setEmail("");
      setAvatar(null);
      setBio('')
      setPassword("");
      setRepeatPassword('')
      history.push('/')
    } else {
          return setErrors(['Confirm Password field must be the same as the Password.'])
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
    <div>
      <form onSubmit={onSignUp}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Avatar</label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={updateAvatar}
          ></input>
        </div>
        <div>
          <label>Biography</label>
          <textarea
            name="bio"
            onChange={updateBio}
            value={bio}
          ></textarea>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )}


export default SignUpForm;
