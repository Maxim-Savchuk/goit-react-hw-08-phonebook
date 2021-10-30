const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;

export { getIsLoggedIn, getUsername, getIsFetchingCurrent };
