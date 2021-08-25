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
import { useHistory } from 'react-router-dom';
import { Buttons, CanvasList, Container, Heading } from './styles';
import DroppableBox from '../../atoms/DroppableBox';

interface CanvasProps {
	canvasFieldsList: any[];
	formsList: any[];
	updateForm: any;
	setFormsList: Function;
	setCanvasFieldsList: Function;
	setUpdateForm: Function;
};

const Canvas = ({
	canvasFieldsList,
	formsList,
	updateForm,
	setCanvasFieldsList,
	setFormsList,
	setUpdateForm
}: CanvasProps) => {
	const history = useHistory();

	const onDuplicate = (type: string, index: number) => {
		const newArr = [...canvasFieldsList];
		const newObj = {
			id: new Date().toJSON(),
			type,
			props: {}
		};
		newArr.splice(index + 1, 0, newObj);
		setCanvasFieldsList(newArr);
	};

	const onEdit = (id: string, type: string, index: number) => {
		if (type === 'text-field') {
			const obj = {
				...canvasFieldsList[index],
				props: {
					...canvasFieldsList[index].props
				}
			};
			const { props } = obj;
			props.label = prompt('Edit label name');
			const newArr = [...canvasFieldsList];
			newArr[index] = obj;
			setCanvasFieldsList(newArr);
		}
	};

	const onDelete = (index: number) => {
		const newArr = [...canvasFieldsList];
		newArr.splice(index, 1);
		setCanvasFieldsList(newArr);
	};

	const renderField = ({ id, type, props }: any, index: number) => {
		if (type === 'input-field') {
			return (
				<InputField
					id={id}
					index={index}
					onDuplicate={() => onDuplicate(type, index)}
					onDelete={() => onDelete(index)}
					getInput={(input: string) => { }}
				/>
			);
		} else if (type === 'checkbox-field') {
			return (
				<CheckboxField
					id={id}
					index={index}
					onDuplicate={() => onDuplicate(type, index)}
					onDelete={() => onDelete(index)}
					getChecked={(checked: boolean) => { }}
				/>
			);
		} else if (type === 'file-upload-field') {
			return (
				<FileUpload
					id={id}
					index={index}
					onDuplicate={() => onDuplicate(type, index)}
					onDelete={() => onDelete(index)}
					getFile={(file: any) => { }}
				/>
			);
		} else if (type === 'text-field') {
			return (
				<TextField
					id={id}
					index={index}
					onDuplicate={() => onDuplicate(type, index)}
					onEdit={() => onEdit(id, type, index)}
					onDelete={() => onDelete(index)}
					label={props?.label}
				/>
			);
		} else if (type === 'divider-field') {
			return (
				<DividerField
					id={id}
					index={index}
					onDuplicate={() => onDuplicate(type, index)}
					onDelete={() => onDelete(index)}
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
			<DroppableBox id={'canvas'}>
				<CanvasList>
					{
						canvasFieldsList?.map((obj, index) => (
							<div key={obj?.id}>
								{renderField(obj, index)}
							</div>
						))
					}
				</CanvasList>
			</DroppableBox>
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