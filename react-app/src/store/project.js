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
  const formData = new FormData();
  formData.append('user_id', user_id)
  formData.append('title', title)
  formData.append('category_id', category_id)
  formData.append('keywords', keywords)
  formData.append('intro', intro)

  for (let i = 0; i < intro_imgs.length; i++) {
    formData.append('intro_imgs', intro_imgs[i]);
  }

  const res = await fetch('/api/project', {
    method: 'POST',
    body: formData
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addProject(data.projects));
    return res;
  }
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
