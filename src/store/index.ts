import { createStore } from 'redux';
import rootReducer from './redux';

/* Create store with reducer and middleware */
export const store = createStore(
    rootReducer,
    /* All middlewares added here */
);

export type RootState = ReturnType<typeof store.getState>;