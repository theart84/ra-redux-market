//Reducers
import productsReducer from './products/reducer'
import formReducer from './form/reducer';

const rootReducer = {
  form: formReducer,
  products: productsReducer
}

// Exports
export default rootReducer;
