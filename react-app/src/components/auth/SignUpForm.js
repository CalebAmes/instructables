import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState('')
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [bio, setBio] = useState('')
  const [type, setType] = useState('')
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const formData = new FormData()
      formData.append('avatar', avatar)
      setAvatarLoading(true)

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        await res.json()
        setAvatarLoading(false)
      }
      else {
        setAvatarLoading(false)
        console.log('an error occurred')
      }
      const user = await signUp(username, email, avatar, bio, type, password);
      if (!user.errors) {
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

    const updateType = (e) => {
    setType(e.target.value);
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
          onChange={updateAvatar}
          value={avatar}
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
  );
};

export default SignUpForm;
