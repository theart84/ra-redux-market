// Core
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { IForm } from "./interfaces";

declare global {
  type State<T> = { [key: string]: T };
}

const initialState: IForm = {
  title: "",
  price: "",
  amountOfDiscount: "",
  imageURL: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeValue(
      state: State<string>,
      action: PayloadAction<{ type: string; value: string }>
    ) {
      const { type, value } = action.payload;
      state[type] = value;
    },
    clearForm(state) {
      state.title = "";
      state.price = "";
      state.amountOfDiscount = "";
      state.imageURL = "";
    },
  },
});

// Exports
export const { changeValue, clearForm } = formSlice.actions;
export default formSlice.reducer;
