import { SAVE_USER_DATA, SET_LOG_STATE, SET_MOVEMENT } from "../constants";

const initialState = {
  email: "",
  password: "",
  logState: false,
  movements: []
};

export default sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        movements: []
      };
    case SET_LOG_STATE:
      return {
        ...state,
        logState: action.payload
      };
    case SET_MOVEMENT:
      return {
        ...state,
        movements: [...state.movements, action.payload]
      };
    default:
      return state;
  }
};
