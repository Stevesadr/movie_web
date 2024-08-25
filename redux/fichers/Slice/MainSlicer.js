const { createSlice } = require("@reduxjs/toolkit");

const INITISA_STATE = [];

const MainSlicer = createSlice({
  name: "mainSlicer",
  initialState: INITISA_STATE,
  reducers: {
    addImage(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addImage } = MainSlicer.actions;
export default MainSlicer.reducer;
