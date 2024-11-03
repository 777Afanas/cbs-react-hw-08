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
    clearNotes: (state) => {
      state.note = [];
    },
  },
});

export const { writeNote, clearNotes } = notesSlice.actions;

export default notesSlice.reducer;
