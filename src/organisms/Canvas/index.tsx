import React from 'react';
import {
	CheckboxField,
	InputField,
	FileUpload,
	TextField,
	DividerField,
	ValidateButton,
	SaveButton
} from '../../atoms';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';

interface CanvasProps {
	canvasFieldsList: any[];
	formsList: any[];
	updateForm: any;
	setFormsList: Function;
	setCanvasFieldsList: Function;
	setUpdateForm: Function;
};

const Container = styled.div`
    background-color: white
    width: 70%;
	height: 100vh;
	display: flex;
	flex-direction: column;
  	justify-content: center;
	align-items: center;
`;
const Heading = styled.h3`
    color: grey;
    font-weight: bold;
`;
const CanvasList = styled.div`
	height: 85vh;
    width: 100vh;
`;
const CanvasListItem = styled.div``;
const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 50vh;
`;

const Canvas = ({
	canvasFieldsList,
	formsList,
	updateForm,
	setCanvasFieldsList,
	setFormsList,
	setUpdateForm
}: CanvasProps) => {
	const history = useHistory();

	const renderField = ({ id, type, props }: any, index: number) => {
		if (type === 'input-field') {
			return (
				<InputField
					id={id}
					index={index}
					getInput={(input: string) => {}}
				/>
			);
		} else if (type === 'checkbox-field') {
			return (
				<CheckboxField
					id={id}
					index={index}
					getChecked={(checked: boolean) => {}}
				/>
			);
		} else if (type === 'file-upload-field') {
			return (
				<FileUpload
					id={id}
					index={index}
					getFile={(file: any) => {}}
				/>
			);
		} else if (type === 'text-field') {
			return (
				<TextField
					id={id}
					index={index}
					label={props?.label}
				/>
			);
		} else if (type === 'divider-field') {
			return (
				<DividerField
					id={id}
					index={index}
				/>
			);
		}
	};

	const onValidateForm = () => {
		if (canvasFieldsList.length) {
			history.push('/preview-form', { form: canvasFieldsList });
		}
	};

	const onSaveForm = () => {
		if (updateForm?.name) {
			const formArr = [{
				name: updateForm?.name,
				form: canvasFieldsList
			}];
			const updatedFormsList = formsList.map(obj => formArr.find(o => o.name === obj.name) || obj);
			setFormsList(updatedFormsList);
			setUpdateForm({});
		}
		if (canvasFieldsList.length && !updateForm?.name) {
			const name = `Form - ${formsList.length + 1}`;
			const formObj = {
				name,
				form: canvasFieldsList
			};
			const newFormsList = [...formsList, formObj];
			setFormsList(newFormsList);
		}
		setCanvasFieldsList([]);
	};

	return (
		<Container>
			<Heading>
				{`Drop & Create`}
			</Heading>
			<Droppable droppableId={'canvas'}>
				{
					(provided) => (
						<CanvasList
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{
								canvasFieldsList?.map((obj, index) => (
									<CanvasListItem key={obj?.id}>
										{renderField(obj, index)}
									</CanvasListItem>
								))
							}
							{provided.placeholder}
						</CanvasList>
					)
				}
			</Droppable>
			{
				updateForm?.name ? (
					<Buttons>
						<ValidateButton onClick={onValidateForm} />
						<SaveButton onClick={onSaveForm} />
					</Buttons>
				) : (
					<SaveButton onClick={onSaveForm} />
				)
			}
		</Container>
	);
};

export default Canvas;