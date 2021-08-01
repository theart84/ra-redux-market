// Core
import React from "react";
import {useSelector} from "react-redux";
import {RootReducer} from "../../store";
import {IProduct} from "../../bus/products/interfaces";
import ProductItem from "./ProductItem/ProductItem";

const ProductList: React.FC = () => {
  const products = useSelector((store: RootReducer) => store.products.products);

  return (
    <div className="row">
      {products.map((product: IProduct) =>  <ProductItem key={product.id} {...product} />)}
    </div>
  )
}

export default ProductList;
