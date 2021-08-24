import { createStore } from 'redux';
import rootReducer from './redux';

/* Create store with reducer and middleware */
const store = createStore(
    rootReducer,
    /* All middlewares added here */
);

/* Export redux store */
export default store;