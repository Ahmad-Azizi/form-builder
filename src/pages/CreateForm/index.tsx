import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { SelectionPane, Canvas } from '../../organisms';
import { CreateFormActions } from './reducers';
import { getCanvasFieldsListFromStore, getFormsListFromStore, getUpdateFormFromStore } from './selectors';

interface CreateFormProps {
	canvasFieldsList: object[];
	formsList: object[];
	updateForm: object;
	setCanvasFieldsList: Function;
	setFormsList: Function;
	setUpdateForm: Function;
};

const Container = styled.div`
	flex: 1;
`;

const CreateForm = ({
	canvasFieldsList,
	formsList,
	updateForm,
	setCanvasFieldsList,
	setFormsList,
	setUpdateForm
}: CreateFormProps & ReduxProps) => {

	const onDragEnd = ({ draggableId, destination, source }: any) => {
		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const sortedFieldsList = [...canvasFieldsList];

		if (source.droppableId === 'selection-pane-form-components') {
			const props: any = {};

			if (draggableId === 'text-field') {
				props.label = prompt('Enter label name');
			}

			const draggedObj = {
				id: new Date().toJSON(),
				type: draggableId,
				props
			};
			sortedFieldsList.splice(destination.index, 0, draggedObj);
			setCanvasFieldsList(sortedFieldsList);
		} else {
			const draggedObj = canvasFieldsList.find((obj: any) => obj.id === draggableId);
			sortedFieldsList.splice(source.index, 1);
			sortedFieldsList.splice(destination.index, 0, draggedObj);
			setCanvasFieldsList(sortedFieldsList);
		}
	};

	return (
		<DragDropContext
			onDragEnd={onDragEnd}
		>
			<Container>
				<SelectionPane
					canvasFieldsList={canvasFieldsList}
					formsList={formsList}
					setCanvasFieldsList={setCanvasFieldsList}
					setUpdateForm={setUpdateForm}
				/>
				<Canvas
					canvasFieldsList={canvasFieldsList}
					formsList={formsList}
					updateForm={updateForm}
					setCanvasFieldsList={setCanvasFieldsList}
					setFormsList={setFormsList}
					setUpdateForm={setUpdateForm}
				/>
			</Container>
		</DragDropContext>
	);
};

const mapStateToProps = (state: any) => ({
	canvasFieldsList: getCanvasFieldsListFromStore(state),
	formsList: getFormsListFromStore(state),
	updateForm: getUpdateFormFromStore(state)
});

const mapDispatchToProps = {
	setCanvasFieldsList: CreateFormActions.setCanvasFieldsList,
	setFormsList: CreateFormActions.setFormsList,
	setUpdateForm: CreateFormActions.setUpdateForm
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(CreateForm);