import React from 'react';
import { useHistory } from 'react-router-dom';
import { DroppableBox, FormOption, ValidateButton } from '../../atoms';
import { Container, Form, Heading, Plus, SavedForms } from './styles';

interface SelectionPaneProps {
    canvasFieldsList: object[];
    formsList: object[];
    setCanvasFieldsList: Function;
    setUpdateForm: Function;
};

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
                    <ValidateButton onClick={onValidateForm} />
                )
            }
            <Heading>
                Form Components
            </Heading>
            <DroppableBox id={'selection-pane-form-components'} isDropDisabled={true}>
                <div>
                    {
                        formOptions?.map(({ type, name }, index) => (
                            <FormOption key={type} id={type} index={index} name={name} />
                        ))
                    }
                </div>
            </DroppableBox>
        </Container>
    );
};

export default SelectionPane;