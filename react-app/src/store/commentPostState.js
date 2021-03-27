const OPEN = "commentForm/open";
const CLOSE = "commentForm/close";

export const openForm = () => {
  return {
    type: OPEN,
  }
}

export const closeForm = () => {
  return {
    type: CLOSE,
  }
}

const initialState = { open: false };

const reducer = (state = initialState, action) => {
  let newState = { open: false };
  switch (action.type) {
    case OPEN:
      newState.open = true;
      return newState;
    case CLOSE:
      newState.open = false;
      return newState;
    default:
      return state;
  }
}

export default reducer;
