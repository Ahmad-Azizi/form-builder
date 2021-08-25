import { createActions, createReducer, ActionTypes } from 'reduxsauce';

/* Types and Action Creators */
const { Types, Creators } = createActions({
    setCanvasFieldsList: ['canvasFieldsList'],
    setFormsList: ['formsList'],
	setUpdateForm: ['updateForm']
});

export const CreateFormTypes = Types;
export const CreateFormActions = Creators;

/* Initial State */
const INITIAL_STATE = {
    canvasFieldsList: [],
    formsList: [],
	updateForm: {}
};

/* Reducers */
const setCanvasFieldsList = (state: any, { canvasFieldsList }: ActionTypes) => ({
    ...state,
    canvasFieldsList
});

const setFormsList = (state: any, { formsList }: ActionTypes) => ({
    ...state,
    formsList
});

const setUpdateForm = (state: any, { updateForm }: ActionTypes) => ({
    ...state,
    updateForm
});

/* Hookup Reducers To Types */
export const CreateFormReducer = createReducer(INITIAL_STATE, {
    [Types.SET_CANVAS_FIELDS_LIST]: setCanvasFieldsList,
    [Types.SET_FORMS_LIST]: setFormsList,
	[Types.SET_UPDATE_FORM]: setUpdateForm
});