import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions";

const INIT_STATE = {
  loading: false,
  currentUser: null,
};

const authReducer = (state = INIT_STATE, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
