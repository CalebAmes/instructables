const SET_COMMENT_REDIRECT = "comment/setRedirect";


export const setCommentRedirect = (comment, projectId) => ({
  type: SET_COMMENT_REDIRECT,
  comment,
  projectId,
})

const initialState = { commentsRedirect: false, comment: null, projectId: null }

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_COMMENT_REDIRECT:
      newState = { ...state };
      newState.commentsRedirect = true;
      newState.comment = action.comment;
      newState.projectId = action.projectId;
      return newState;
    default:
      return state;
  }
}

export default reducer
