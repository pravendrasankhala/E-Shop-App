import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: []
}

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload)
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
    }
  }
})

export const {addCard , removeCard} = cardSlice.actions;

export default cardSlice.reducer;