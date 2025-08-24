const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  messages: null,
  accesstoken: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.messages = null;
      state.accesstoken = null;
    },
    signupSuccess(state, action) {
      console.log("the singup success",action.payload);
      state.loading = false;
      state.messages = action.payload;
      state.error = null;
      state.accesstoken = null;
    },
    signupFail(state, action) {
      state.loading = false;
      state.messages = null;
      state.error = action.payload;
      state.accesstoken = null;
    },
    resetTokenMessages(state) {
      state.loading = false;
      state.messages = null;
      state.error = null;
      // state.accesstoken = null;
    },
    signinRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.messages = null;
      state.accesstoken = null;
    },
    signinSuccess(state, action) {
      state.loading = false;
      state.messages = action.payload.message;
      state.error = null;
      state.accesstoken = action.payload.data.token;
    },
    signinFail(state, action) {
      state.loading = false;
      state.messages = null;
      state.error = action.payload;
      state.accesstoken = null;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFail,
  resetTokenMessages,
  signinRequest,
  signinSuccess,
  signinFail,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
