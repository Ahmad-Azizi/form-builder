import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FormOption, ValidateButton } from '../../atoms';

interface SelectionPaneProps {
    canvasFieldsList: object[];
    formsList: object[];
    setCanvasFieldsList: Function;
    setUpdateForm: Function;
};

const Container = styled.div`
	background-color: #067AFF;
	height: 100vh;
  	width: 20%;
  	float: left;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
`;
const SavedForms = styled.div`
    background-color: #F6F6F6;
    width: 20%;
    top: 0;
    position: absolute;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
`;
const Form = styled.label`
    margin-left: 3vh;
    font-weight: normal;
`;
const Heading = styled.h3`
    color: white;
    font-weight: bold;
    flex-direction: row;
`;
const Plus = styled.label`
    margin-left: 20vh;
`;
const SelectionPaneList = styled.div``;

const SelectionPane = ({
    canvasFieldsList,
    formsList,
    setCanvasFieldsList,
    setUpdateForm
}: SelectionPaneProps) => {
    const history = useHistory();
    const formOptions = [
        {
            type: 'input-field',
            name: 'Input'
        },
        {
            type: 'checkbox-field',
            name: 'Checkbox'
        },
        {
            type: 'file-upload-field',
            name: 'File Uploader'
        },
        {
            type: 'text-field',
            name: 'Text'
        },
        {
            type: 'divider-field',
            name: 'Divider'
        },
    ];

    const onCreateNewForm = () => {
        setCanvasFieldsList([]);
        setUpdateForm({});
    };

    const onFormClick = (obj: any) => {
        setCanvasFieldsList(obj.form);
        setUpdateForm(obj);
    };

    const onValidateForm = () => {
		if (canvasFieldsList.length) {
			history.push('/preview-form', { form: canvasFieldsList });
		}
	};

    return (
        <Container>
            {
                formsList.length ? (
                    <SavedForms>
                        <Heading style={{ top: 0, color: 'black', position: 'relative' }}>
                            Forms
                            <Plus onClick={onCreateNewForm}>
                                +
                            </Plus>
                        </Heading>
                        {
                            formsList?.map((obj: any) => (
                                <Form key={obj.name} onClick={() => onFormClick(obj)}>
                                    {obj.name}
                                </Form>
                            ))
                        }
                    </SavedForms>
                ) : (
                    <ValidateButton onClick={onValidateForm}/>
                )
            }
            <Heading>
                Form Components
            </Heading>
            <Droppable droppableId={'selection-pane-form-components'} isDropDisabled={true}>
                {
                    (provided) => (
                        <SelectionPaneList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                formOptions.map(({ type, name }, index) => (
                                    <FormOption key={type} id={type} index={index} name={name} />
                                ))
                            }
                            {provided.placeholder}
                        </SelectionPaneList>
                    )
                }
            </Droppable>
        </Container>
    );
};

export default SelectionPane;