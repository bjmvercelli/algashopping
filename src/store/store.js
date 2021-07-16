import { createStore, combineReducers } from 'redux';
import calculatorReducer from '../reducers/Calculator';

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

const store = createStore(rootReducer);

export default store;