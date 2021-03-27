const SET_USERS = 'users';

const setUsers = (users) => ({
  type: SET_USERS,
  users,
})

export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  const data = await res.json();
  dispatch(setUsers(data.users))
  return data;
}

export const getUserById = async (userId) => {
  const res = await fetch(`/api/users/${userId}`);
  const data = await res.json();
  console.log("asdasd", data)
  return data
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
