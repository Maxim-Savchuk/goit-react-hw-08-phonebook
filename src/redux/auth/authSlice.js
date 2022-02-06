import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, signUp } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrent = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrent = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
    },
    [signUp.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
