// Core
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generate} from 'shortid';

//Interfaces
import {IProduct, IProductInitialState} from "./interfaces";

const initialState: IProductInitialState = {
  products: [
    {
      id: generate(),
      title: 'Смартфон Xiaomi Redmi 9T',
      price: 14890,
      priceWithDiscount: 13401,
      amountOfDiscount: 10,
      imageURL: 'https://avatars.mds.yandex.net/get-mpic/5177644/img_id7871703736941292751.png/orig',
    },
    {
      id: generate(),
      title: 'Wi-Fi роутер Xiaomi',
      price: 1790,
      priceWithDiscount: 1790,
      amountOfDiscount: 0,
      imageURL: 'https://avatars.mds.yandex.net/get-mpic/3614670/img_id4417874511430685327.jpeg/orig',
    },
    {
      id: generate(),
      title: 'Упоры поворотные Xiaomi',
      price: 1740,
      priceWithDiscount: 1653,
      amountOfDiscount: 5,
      imageURL: 'https://avatars.mds.yandex.net/get-mpic/4728959/img_id7169942314710480360.jpeg/orig',
    },
    {
      id: generate(),
      title: 'Туалетная вода Antonio Banderas King of Seduction',
      price: 995,
      priceWithDiscount: 995,
      amountOfDiscount: 0,
      imageURL: 'https://avatars.mds.yandex.net/get-mpic/3925628/img_id7386570610164057015.jpeg/orig',
    },
    {
      id: generate(),
      title: 'Беспроводная зарядная станция Apple MagSafe',
      price: 11890,
      priceWithDiscount: 10106.50,
      amountOfDiscount: 15,
      imageURL: 'https://avatars.mds.yandex.net/get-mpic/4809583/img_id2635246157203973421.jpeg/orig',
    }
  ]
}

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addNewProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    }
  }
})

// Exports
export const {
  addNewProduct,
} = productsReducer.actions
export default productsReducer.reducer
