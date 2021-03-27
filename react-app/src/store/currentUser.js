const SET_USER = "currentUser/setCurrentUser"


const setUser = (user) => ({
  type: SET_USER,
  user
})

export const setCurrentUser = () => async (dispatch) => {
  const res = await fetch('/api/auth/');
  const user = await res.json();
  dispatch(setUser(user))
}


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {};
      newState['user'] = action.user
      return newState;
    default:
      return state;
  }
}

export default reducer
