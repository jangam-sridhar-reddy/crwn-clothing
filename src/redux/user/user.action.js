import userActionTypes from "./user.types";

export const setUserAction = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStartAction = () => {
  return {
    type: userActionTypes.GOOGLE_SIGNIN_START,
  };
};

export const SignInSuccessAction = (user) => {
  return {
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user,
  };
};

export const SignInFailureAction = (error) => {
  return {
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error,
  };
};

export const emailSignInStartAction = (emailAndPassword) => {
  return {
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword,
  };
};

export const checkUserStatus = () => {
  return {
    type: userActionTypes.CHECK_USER_STATUS,
  };
};

export const signOutstartAction = () => {
  return {
    type: userActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccessAction = () => {
  return {
    type: userActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailureAction = (error) => {
  return {
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signUpStartAction = (userCredentials) => {
  return {
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials,
  };
};

export const signUpSuccessAction = ({ user, additionalData }) => {
  return {
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailureAction = (error) => {
  return {
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error,
  };
};
