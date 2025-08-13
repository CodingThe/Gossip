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
      state.accesstoken = null;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFail,
  resetTokenMessages,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
