const SET_STEPS = 'steps/setSteps'


const setSteps = (steps) => ({
  type: SET_STEPS,
  steps,
})


export const getCurrentSteps = (projectId) => async (dispatch) => {
  const res = await fetch(`/api/steps/${projectId}`);
  const data = await res.json();
  dispatch(setSteps(data.steps))
  return res;
}


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_STEPS:
      newState = {};
      action.steps.forEach(step => {
        newState[step.id] = step
      })
      // newState['steps'] = action.steps
      return newState;
    default:
      return state;
  }
}

export default reducer
