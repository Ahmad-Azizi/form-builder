import { combineReducers } from 'redux';
/* Import all individual reducers here */
import { CreateFormReducer } from '../pages/CreateForm/reducers';

/* Combine all reducers */
const rootReducer = combineReducers({
    createForm: CreateFormReducer
});

export default rootReducer;