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

export const getComments = (projectId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${projectId}`);
  const data = await res.json();
  dispatch(setComment(data.comments));
  return res;
}

export const createComment = (comment) => async (dispatch) => {
  const { userId, comment, upvotes, projectId } = comment;
  const res = await fetch(`/api/comments/${userId}/${projectId}`, {
    method: 'POST',
    body: JSON.stringify({
      comment, upvotes
    }),
  });
  const data = await res.json();
  dispatch(addComment(data.comment));
  return res;
}

export const deleteCommentStore = (commentId) => async (dispatch) => {
  await fetch(`/api/comments/${commentId}`, { method: 'delete' })
}



function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case ADD_COMMENT:
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    case SET_COMMENT:
      newState = {};
      action.comment.forEach(item => {
        newState[item.id] = item;
      });
      return newState;
    case REMOVE_COMMENT:
      return { ...state, comment: null };
    default:
      return state;
  }
}

export default reducer
