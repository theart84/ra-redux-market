// Core
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "shortid";

// Types
import { RootReducer } from "../../store";

// Actions
import { changeValue, clearForm } from "../../bus/form/reducer";
import { addNewProduct } from "../../bus/products/reducer";

const AddNewProductForm: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  const { title, price, amountOfDiscount, imageURL } = useSelector(
    (store: RootReducer) => store.form
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const isValid =
      title.trim().length &&
      price.trim().length &&
      amountOfDiscount.trim().length &&
      imageURL.trim().length;
    isValid ? setIsValid(true) : setIsValid(false);
  }, [title, price, amountOfDiscount, imageURL]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeValue({ type: name, value }));
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const priceStrToNumber = parseInt(price);
    const amountOfDiscountStrToNumber = parseInt(amountOfDiscount);
    const calcPriceWithDiscount =
      amountOfDiscountStrToNumber !== 0
        ? priceStrToNumber -
          priceStrToNumber * (amountOfDiscountStrToNumber / 100)
        : 0;
    const newProduct = {
      id: generate(),
      title,
      price: priceStrToNumber,
      priceWithDiscount: calcPriceWithDiscount,
      amountOfDiscount: amountOfDiscountStrToNumber,
      imageURL,
    };
    dispatch(addNewProduct(newProduct));
    dispatch(clearForm());
  };

  return (
    <form
      style={{ width: 500, margin: "0 auto 50px" }}
      onSubmit={onSubmitHandler}
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          name="price"
          value={price}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amountOfDiscount" className="form-label">
          Discount
        </label>
        <input
          type="text"
          className="form-control"
          id="amountOfDiscount"
          name="amountOfDiscount"
          value={amountOfDiscount}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageURL" className="form-label">
          Image Link
        </label>
        <input
          type="text"
          className="form-control"
          id="imageURL"
          name="imageURL"
          value={imageURL}
          onChange={onChangeHandler}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginRight: 15 }}
        disabled={!isValid}
      >
        Add New product
      </button>
      <button type="reset" className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
};

// Exports
export default AddNewProductForm;
