const setUserAction = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

export { setUserAction };
