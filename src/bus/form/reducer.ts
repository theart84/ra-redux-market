// Core
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Interfaces
import {IForm} from './interfaces';

const initialState: IForm = {
  title: '',
  price: '',
  amountOfDiscount: '',
  imageURL: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeTitleValue(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changePriceValue(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    changeAmountOfDiscountValue(state, action: PayloadAction<string>) {
      state.amountOfDiscount = action.payload;
    },
    changeImageURLValue(state, action: PayloadAction<string>) {
      state.imageURL = action.payload;
    },
    clearForm(state) {
      state.title = '';
      state.price = '';
      state.amountOfDiscount = '';
      state.imageURL = '';
    }
  }
});

// Exports
export const {
  changeTitleValue,
  changePriceValue,
  changeAmountOfDiscountValue,
  changeImageURLValue,
  clearForm
} = formSlice.actions;
export default formSlice.reducer;
