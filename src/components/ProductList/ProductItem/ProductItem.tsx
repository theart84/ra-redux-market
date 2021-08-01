// Core
import React, {useState} from "react";

// Interfaces
import {IProduct} from "../../../bus/products/interfaces";

// Styles
import styles from './ProductItem.module.css';

const ProductItem: React.FC<IProduct> = (
  {
    id,
    price,
    imageURL,
    amountOfDiscount,
    title,
    priceWithDiscount
  }
) => {
  let prices;
  if (amountOfDiscount !== 0) {
    prices = (
      <>
        <span className={styles.newPrice}>{`${priceWithDiscount.toFixed(2)}₽`}</span>
        <span className={styles.oldPrice}>{`${price.toFixed(2)}₽`}</span>
      </>
    )
  } else {
    prices = <span className={styles.price}>{`${price.toFixed(2)}₽`}</span>
  }

  return (
    <div className="card mb-4" style={{width: '15rem', marginRight: 15}} data-id={id}>
      <div className={styles.imgContainer}>
        <img src={imageURL} className={styles.image} alt="..."/>
        {amountOfDiscount !== 0 && <span className={styles.discountBadge}>{`${amountOfDiscount}%`}</span>}
      </div>
      <div className="card-body" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="card-title" style={{display: 'flex', justifyContent: "space-between", alignItems: 'baseline'}}>
          {prices}
        </div>
        <h5 className="card-text">{title}</h5>
        <a href="/" className="btn btn-warning" style={{marginTop: "auto"}}>В корзину</a>
      </div>
    </div>
  )
}

// Exports
export default ProductItem;
