const SET_STEPS = 'steps/setSteps'
const ADD_STEP = 'steps/addSteps'

const setSteps = (steps) => ({
  type: SET_STEPS,
  steps,
})

const addStep = (step) => ({
  type: ADD_STEP,
  payload: step
})

export const addAStep = (stepState) => async (dispatch) => {
  const {project_id, step_count, step_title, step_imgs, step} = stepState
  const formData = new FormData();
  formData.append('project_id', project_id)
  formData.append('step_title', step_title)
  formData.append('step_count', step_count)
  formData.append('step', step)

  for (let i = 0; i < step_imgs.length; i++) {
    formData.append('step_imgs', step_imgs[i]);
  }

  const res = await fetch('/api/step', {
    method: 'POST',
    body: formData
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addStep(data.step));
    return res;
  }
}


// export const addAStep = (step) => async (dispatch) => {
//   const {project_id, step_count, step_title, step_imgs, step} = step
//   const res = await fetch('/api/steps', {
//   method: 'POST',
//   body: JSON.stringify(
//     {project_id, 
//       step_count, 
//       step_title, 
//       step_imgs, 
//       step})
//   })
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(addStep(data.step))
//     return res
//   }
// }

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
    case ADD_STEP:
      newState[action.payload.step_count] = action.payload
      console.log(newState)
      return newState;
    default:
      return state;
  }
}

export default reducer
