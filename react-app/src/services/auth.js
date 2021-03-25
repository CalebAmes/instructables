import { setCurrentUser } from '../store/currentUser';

export const authenticate = async () => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUp = async (user) => {
  const { avatar, username, email, bio, password } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("bio", bio)
  formData.append("password", password);
  if (avatar) formData.append("avatar", avatar)

  // console.log(formData.get('avatar'), 'this is the avatar in the formData');

  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  else {
    console.log('Something went wrong', res)
  }
}
