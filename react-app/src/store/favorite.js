const SET_FAVORITE = 'favorite/setFavorite'
const ADD_FAVORITE = 'favorite/addFavorite'
const REMOVE_FAVORITE = 'favorite/removeFavorite'


const setFavorite = (favorite) => ({
  type: SET_FAVORITE,
  favorite
})

const addFavorite = (favorite) => ({
  type: ADD_FAVORITE,
  favorite
})

const removeFavorite = () => ({
  type: REMOVE_FAVORITE,
})

export const getFavorite = () => async(dispatch) => {
  const res = await fetch(`/user/favorites/`)
  const data = await res.json()
  dispatch(setFavorite(data.favorite))
  return res
}

export const addUserFavorite = (favorite) => async (dispatch) => {
  const { user_id, project_id } = favorite
  const res = await fetch('/api/user/favorites', {
    method: 'POST',
    body: JSON.stringify({
      user_id, project_id,
    })
  })
  const data = await res.json()
  dispatch(addFavorite(data.favorite))
  return res
}

export const deleteFavorite = () => async (dispatch) => {
  const res = await fetch('/api/favorites', {
    method: 'DELETE',
  })
  dispatch(removeFavorite())
  return res
}

function reducer(state = {}, action) {
  let newState
  switch (action.type) {
    case ADD_FAVORITE:
      newState = { ...state };
      newState[action.favorite.id] = action.favorite
    case SET_FAVORITE:
      newState = {}
      action.favorite.forEach(item => {
        newState[item.id] = item
      })
      return newState;
    case REMOVE_FAVORITE:
      return {...state, favorite: null }
    default:
      return state
  }
}

export default reducer