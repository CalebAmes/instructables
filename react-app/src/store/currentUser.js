const SET_USER = "currentUser/setCurrentUser"


export const setCurrentUser = (user) => ({
  type: SET_USER,
  user
})



function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {};
      newState['currentUser'] = action.user
      return newState;
    default:
      return state;
  }
}

export default reducer
