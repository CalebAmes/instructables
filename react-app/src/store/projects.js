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

export const getProject = () => async (dispatch) => {
  const res = await fetch('/api/project');
  const data = await res.json();
  dispatch(setProject(data.project))
  return res;
}

export const createProject = (event) => async (dispatch) => {
  const { id, user_id, title, category_id, keywords, intro_img, intro, created_at } = project;
  const res = await fetch('/api/project', {
    method: 'POST',
    body: JSON.stringify({
      id,
      user_id,
      title,
      category_id,
      keywords,
      intro_img,
      intro,
      created_at,
    }),
  });
  const data = await res.json();
  dispatch(addProject(data.project));
  return res;
};

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
      newState[action.project.id] = action.project;
      return newState;
    case SET_PROJECT:
      newState = {};
      action.project.forEach(i => {
        newState[i.id] = i;
      });
      return newState;
    case REMOVE_PROJECT:
      return { ...state, project: null };
    default:
      return state;
  }
}

export default reducer