const SET_PROJECT = 'project/setProject';
const ADD_PROJECT = 'project/addProject';
const REMOVE_PROJECT = 'project/removeProject';


const setProject = (project) => ({
  type: SET_PROJECT,
  project,
})

const addProject = (project) => ({
  type: ADD_PROJECT,
  project,
})

const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  project,
})


export const getProjects = () => async (dispatch) => {
  const res = await fetch('/api/projects');
  const data = await res.json();
  dispatch(setProject(data.projects))
  return res;
}


export const createProject = (project) => async (dispatch) => {
    const { user_id, title, category_id, keywords, intro_imgs, intro } = project;
    const res = await fetch('/api/projects', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user_id, 
      title, 
      category_id, 
      keywords, 
      intro_imgs, 
      intro
    })
  });
  if (res.ok) {
    const data = await res.json()
    dispatch(addProject(data.project))
    return res
  }
}


export const deleteProject = () => async (dispatch) => {
  const res = await fetch('/api/project', {
    method: 'DELETE',
  });
  dispatch(removeProject());
  return res;
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      newState = { ...state };
      newState['project'] = action.project;
      return newState;
    case SET_PROJECT:
      newState = {};
      action.project.forEach(item => {
        newState[item.id] = item;
      });
      return newState;
    case REMOVE_PROJECT:
      return { ...state, project: null };
    default:
      return state;
  }
}

export default reducer
