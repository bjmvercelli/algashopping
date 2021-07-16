import { createStore, combineReducers } from 'redux';
import calculatorReducer from '../reducers/Calculator';
import products from '../reducers/Products';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: products
})

const store = createStore(rootReducer);

export default store;