const SET_CATEGORY = 'category/setCategory';

const setCategory = (category) = ({
  type: SET_CATEGORY,
  category,
})

export const getCategory = () => async (dispatch) => {
  const res = await fetch('/api/category');
  const data = await res.json();
  dispatch(setCategory(data.category))
  return res;
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_CATEGORY:
      newState = {};
      action.category.forEach(item => {
        newState[item.id] = item;
      });
      return newState;
    default:
      return state;
  }
}

export default reducer