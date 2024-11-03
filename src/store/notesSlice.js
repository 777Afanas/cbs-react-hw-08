import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: [],
};

export const notesSlice = createSlice({
  name: "notesValue",
  initialState,
  reducers: {
    writeNote: (state, action) => {
      state.note += action.payload;
    },
    // reset: (state) => {
    //   state.count = 0;
    // },

    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { writeNote, reset } = notesSlice.actions;

export default notesSlice.reducer;
