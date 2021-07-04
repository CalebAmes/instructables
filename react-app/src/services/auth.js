import setCurrentUser from '../store/currentUser'

const SET_USER = 'user';

const setUser = (user) => ({
  type: SET_USER,
  user,
})

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  await dispatch(setUser(data))
  return data;
}

export const login = (email, password) => async (dispatch) => {
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

export const demoLogin = () => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "demo@demo.com",
      password: "password",
    })
  });
  return await response.json();
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = action;
      return newState;
    default:
      return state;
  }
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};





export const signUp = async (username, email, password, bio) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      bio,
      avatar: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }),
  });
  return await response.json();
}

export default reducer;
