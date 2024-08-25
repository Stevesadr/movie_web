const { createSlice } = require("@reduxjs/toolkit");

const INIITIAL_STATE = [];

const myZhanrsSlicer = createSlice({
  name: "zhanrname",
  initialState: INIITIAL_STATE,
  reducers: {
    addZharnArray(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addZharnArray } = myZhanrsSlicer.actions;
export default myZhanrsSlicer.reducer;
