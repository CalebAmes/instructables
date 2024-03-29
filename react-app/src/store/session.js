const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

const removeUser = () => ({
  type: REMOVE_USER
})


export const loginUser = ({ email, password }) => async (dispatch) => {
  const result = await fetch(`/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  if (result.ok) {
    const user = await result.json();
    dispatch(setUser(user));
    return result;
  }
}


export const logoutUser = () => async (dispatch) => {
  const result = await fetch(`/api/auth/logout`, {
    method: 'DELETE'
  });
  if (result.ok) {
    await result.json();
    dispatch(removeUser())
    return result;
  }
}


export const authenticateUser = () => async (dispatch) => {
  const res = await fetch(`/api/auth/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
  }
}

export const signUpUser = (user) => async (dispatch) => {
  const { avatar, username, email, bio, password } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("bio", bio)
  formData.append("password", password);
  if (avatar) formData.append("avatar", avatar)

  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
  }
};


export default function reducer(state = { user: null }, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.payload }
      return newState;
    case REMOVE_USER:
      delete state.user;
      newState = { ...state };
      newState.user = null;
      return newState;
    default: return state;
  }
}
