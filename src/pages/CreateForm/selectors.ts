import { createSelector } from "reselect";

const getCreateFormState = (state: any) => state.createForm;

export const getCanvasFieldsListFromStore = createSelector(
    getCreateFormState,
    (createFormState) => createFormState.canvasFieldsList
);

export const getFormsListFromStore = createSelector(
    getCreateFormState,
    (createFormState) => createFormState.formsList
);

export const getUpdateFormFromStore = createSelector(
    getCreateFormState,
    (createFormState) => createFormState.updateForm
);