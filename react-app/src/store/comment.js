const SET_COMMENT = 'comment/setComment';
const ADD_COMMENT = 'comment/addComment';
const REMOVE_COMMENT = 'comment/removeComment';

const setComment = (comment) => ({
  type: SET_COMMENT,
  comment,
})

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
})

const removeComment = () => ({
  type: REMOVE_COMMENT,
})

export const getComment = () => async (dispatch) => {
  const res = await fetch('/api/comment');
  const data = await res.json();
  dispatch(setComment(data.comment));
  return res;
}

export const createComment = (comment) => async (dispatch) => {
  const { user_id, comment, upvotes, project_id } = comment;
  const res = await fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify({
      user_id, comment, upvotes, project_id,
    }),
  });
  const data = await res.json();
  dispatch(addComment(data.comment));
  return res;
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case ADD_COMMENT:
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    case SET_PROJECT:
      newState = {};
      action.comment.forEach(i => {
        newState[i.id] = i;
      });
      return newState;
    case REMOVE_COMMENT:
      return { ...state, comment: null };
    default:
      return state;
  }
}

export default reducer