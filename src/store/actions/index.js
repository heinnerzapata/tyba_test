import { SAVE_USER_DATA, SET_LOG_STATE, SET_MOVEMENT } from "../constants";

export const saveUserData = (email, password) => {
  return { type: SAVE_USER_DATA, payload: { email, password } };
};

export const setLogState = logState => {
  return { type: SET_LOG_STATE, payload: logState };
};

export const setMovement = newMovement => {
  return { type: SET_MOVEMENT, payload: newMovement };
};
