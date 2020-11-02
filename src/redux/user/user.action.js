import userActionTypes from "./user.types";

const setUserAction = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export { setUserAction };
