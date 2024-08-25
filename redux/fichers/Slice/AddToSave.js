const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = { item: [], totalTime: 0, totalMovie: 0 };

const alltime = (state) => {
  state.totalTime = 0;
  state.totalMovie = 0;

  state.item.map((item) => {
    const time = item.runtime;
    const translateTime = time.match(/\d+/);
    const resTime = parseInt(translateTime[0]);
    state.totalTime += resTime;
    state.totalMovie += item.count;
  });

  return state;
};

const addSaveMovie = createSlice({
  name: "movieSlicer",
  initialState: INITIAL_STATE,
  reducers: {
    addMovie(state, action) {
      state.item.push({ ...action.payload, count: 1 });
      return alltime(state);
    },
    removeMovie(state, action) {
      state = {
        item: state.item.filter((item) => {
          return item.id !== action.payload;
        }),
      };
      return alltime(state);
    },
  },
});

export const { addMovie, removeMovie } = addSaveMovie.actions;
export default addSaveMovie.reducer;
