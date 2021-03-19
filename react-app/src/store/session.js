const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})


export const login = ({ credential, password }) => async (dispatch) => {
    const result = await fetch(`/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });
    if (result.ok) {
        const user = await result.json();
        dispatch(setUser(user));
        return result;
    }
}


export const logout = () => async (dispatch) => {
    const result = await csrfFetch(`/api/auth/logout`, {
        method: 'DELETE'
    });
    if (result.ok) {
        await result.json();
        dispatch(removeUser())
        return result;
    }
}


export const restoreUser = () => async (dispatch) => {
    const response = await fetch(`/api/auth`);
    if (response.ok) {
        const sessionUser = await response.json();
        dispatch(setUser(sessionUser.user));
        return response;
    }
}

export const signUp = (user) => async (dispatch) => {
    const { avatar, username, email, bio, type, password } = user;
    const formData = new FormData();
    formData.append("username", blogName);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) formData.append("avatar", avatar)

    console.log(formData.get('avatar'));

    const res = await csrfFetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data.user));
        return res;
    }
};


export default function sessionReducer(state = { user: null }, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.payload }
            // console.log('new state:', newState)
            // newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            delete state.user;
            newState = { ...state };
            newState.user = null;
            return newState;
        default: return state;
    }
}




