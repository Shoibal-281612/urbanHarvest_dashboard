import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
  try {
    const user = localStorage.getItem("urbanUser");
    if (user) {
      return JSON.parse(user);
    }
  } catch (e) {
    return null;
  }
  return null;
};

const initialState = {
  user: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  loading: false,
  error: null,
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      if (action.payload.rememberMe) {
        localStorage.setItem("urbanUser", JSON.stringify(action.payload.user));
      }
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("urbanUser");
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setRememberMe } =
  authSlice.actions;
export default authSlice.reducer;
