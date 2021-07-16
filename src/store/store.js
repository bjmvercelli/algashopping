import { createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import calculatorReducer from '../reducers/Calculator';
import products from '../reducers/Products';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: products
});

const persistedReducer = persistReducer({
    key: 'root',
    storage //importado
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);