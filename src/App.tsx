// Core
import React from 'react';

// Components
import AddNewProductForm from "./components/AddNewProductForm/AddNewProductForm";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="container pt-3" >
      <AddNewProductForm/>
      <ProductList/>
    </div>
  );
}

// Exports
export default App;
