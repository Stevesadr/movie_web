const { createSlice } = require("@reduxjs/toolkit");

const INITISL_STATE = { token: "" };

const usersData = createSlice({
  name: "root",
  initialState: INITISL_STATE,
  reducers: {
    setJwtToken: (state, action) => {
      state.token = action.payload;
    },
    removeJwtToken: (state) => {
      state.token = "";
    },
  },
});

export const { setJwtToken, removeJwtToken } = usersData.actions;
export default usersData.reducer;
