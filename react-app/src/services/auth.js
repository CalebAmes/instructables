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
  // const data = await response.json();
  // dispatch(setUser(data));
  // return data;
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


// export const signUp = (user) => async (dispatch) => {
//   const { avatar, username, email, bio, password } = user;
//   const formData = new FormData();
//   formData.append("username", username);
//   formData.append("email", email);
//   formData.append("bio", bio)
//   formData.append("password", password);
//   if (avatar) formData.append("avatar", avatar)

//   // console.log(formData.get('avatar'), 'this is the avatar in the formData');

//   const res = await fetch(`/api/auth/signup`, {
//     method: "POST",
//     body: formData,
//   });

//   if (res.ok) {
//     const data = await res.json();
//     dispatch(setUser(data));
//     return data;
//   }
//   else {
//     console.log('Something went wrong', res)
//   }
// }


export const signUp = async (username, email, password, bio) => {
  console.log("IN AUTH STORE", email, password)
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
