export interface IProduct {
  id: string;
  title: string
  price: number
  priceWithDiscount: number
  amountOfDiscount: number
  imageURL: string
}

export interface IProductInitialState {
  products: IProduct[]
}
