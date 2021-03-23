const SET_USERS = 'users';

const setUsers = (users) => ({
  type: SET_USERS,
  users,
})

export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  const data = await res.json();
  dispatch(setUsers(data.users))
  return res;
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_USERS:
      newState = {};
      action.users.forEach(u => {
        newState[u.id] = u;
      });
      return newState;
    default:
      return state;
  }
}

export default reducer