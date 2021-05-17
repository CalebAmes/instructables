const SET_STEPS = 'steps/setSteps'
const ADD_STEP = 'steps/addSteps'
const POST_STEPS = 'steps/postSteps'
const ADD_STEP_MEDIA = 'steps/addStepMedia'

const setSteps = (steps) => ({
  type: SET_STEPS,
  steps,
})

const addStep = (step) => ({
  type: ADD_STEP,
  step
})

const postSteps = (steps) => ({
  type: POST_STEPS,
  steps
})


const addStepMedia = (media) => ({
  type: ADD_STEP_MEDIA,
  media
})


export const addAStep = (newStep) => async (dispatch) => {
  // const {temp_id, step_count, step_title, step_imgs, step} = newStep
  const res = dispatch(addStep(newStep))
  // const data = await res.json()
  return res.step;
}


export const addStepImagery = (media) => async (dispatch) => {
  const {step_count, temp_id, step_imgs} = media;
  let res = dispatch(addStepMedia(media))
  res = await res.json()
  console.log(res, 'res from addStepImagery thunk')
  return res.media;
}


export const publishSteps = (steps, project_id) => async (dispatch) => {
  const res = []
  for(let i = 0; i < steps.length; i++) {
    let {step_count, step_title, step_imgs, step} = steps[i];
    let result = await fetch('/api/steps', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {project_id, 
        step_count, 
        step_title, 
        step_imgs, 
        step})
  })
  // result = await result.json()
  res.push(result)
}
  // let data = await res.json();
  dispatch(postSteps(res))
  return res
}


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
    case ADD_STEP_MEDIA:
      newState = {...state}
      newState['step_media'] = action.media ;
      return newState;  
    case ADD_STEP:
      newState = {...state}
      newState['steps'] = []
      newState['steps'].push(action.step);
      return newState;
    default:
      return state;
  }
}

export default reducer
