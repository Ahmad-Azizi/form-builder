import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SubmitButton } from '../../atoms';
import {
    CheckboxField,
    InputField,
    FileUpload,
    TextField,
    DividerField
} from '../../atoms';

const Container = styled.div`
    border: 1px solid black;
    flex: 1,
    display: flex;
    margin: 2vh;
    height: 95vh;
`;
const Header = styled.div`
    margin-left: 1vh;
`;
const Heading = styled.h1`
    color: grey;
    font-weight: 800px;
`;
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 1vh;
    margin-right: 1vh;
`;
const FormPreview = styled.div`
    width: 75%;
`;
const Preview = styled.div`
    border: 1px solid grey;
    margin-top: 2vh;
    margin-right: 1vh;
    margin-bottom: 2vh;
    height: 70vh;
    padding-top: 3vh;
    padding-left: 3vh;
    padding-right: 3vh;
`;
const OtherData = styled.div`
    width: 25%;
`;
const Data = styled.div`
    border: 1px solid grey;
    margin-top: 2vh;
    margin-left: 1vh;
    margin-bottom: 2vh;
    height: 20vh;
`;
const Footer = styled.div`
    margin-left: 1vh;
`;

const PreviewForm = () => {
    const [form, setForm] = useState([]);
    const [data, setData]: any = useState({});
    const [errors, setErrors] = useState([]);
    const [viewData, setViewData] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const { state: { form: paramForm } }: any = location;

        if (paramForm?.length) {
            setForm(paramForm);
            handleErrors(paramForm);
            handleInitialValues(paramForm);
        }
    }, [location]);

    const handleErrors = (form: any) => {
        const errors: any = [];

        if (form[0].type !== 'text-field') {
            errors.push('First field should be a text label for field')
        }

        setErrors(errors);
    };

    const handleInitialValues = (form: any) => {
        const initalData: any = {};
        form.forEach(({ id, type, props }: any) => {
            if (type === 'text-field') {
                initalData[id] = props?.label;
            } else if (type === 'input-field') {
                initalData[id] = '';
            } else if (type === 'checkbox-field') {
                initalData[id] = false;
            } else if (type === 'file-upload-field') {
                initalData[id] = null;
            }
        });
        setData(initalData)
    };

    const handleValues = (obj: any) => {
        setViewData(false);
        const { id, type, input = null, checked = false, file = null } = obj;
        const newData: any = {
            ...data
        };

        if (type === 'input-field') {
            newData[id] = input;
        } else if (type === 'checkbox-field') {
            newData[id] = checked;
        } else {
            newData[id] = file;
        }
        setData(newData);
    };

    const renderForm = ({ id, type, props }: any, index: number) => {
        if (type === 'input-field') {
            return (
                <InputField
                    id={id}
                    index={index}
                    isDragDisabled={true}
                    getInput={(input: string) => {
                        if (data[id] !== input) {
                            handleValues({ id, type, input });
                        }
                    }}
                />
            );
        } else if (type === 'checkbox-field') {
            return (
                <CheckboxField
                    id={id}
                    index={index}
                    isDragDisabled={true}
                    getChecked={(checked: boolean) => {
                        if (data[id] !== checked) {
                            handleValues({ id, type, checked });
                        }
                    }}
                />
            );
        } else if (type === 'file-upload-field') {
            return (
                <FileUpload
                    id={id}
                    index={index}
                    isDragDisabled={true}
                    getFile={(file: any) => {
                        if (data[id] !== file) {
                            handleValues({ id, type, file });
                        }
                    }}
                />
            );
        } else if (type === 'text-field') {
            return (
                <TextField
                    id={id}
                    index={index}
                    isDragDisabled={true}
                    label={props?.label}
                />
            );
        } else if (type === 'divider-field') {
            return (
                <DividerField
                    id={id}
                    index={index}
                    isDragDisabled={true}
                />
            );
        }
    };

    const onSubmit = () => {
        setViewData(true);
    };

    return (
        <DragDropContext
            onDragEnd={() => { }}
        >
            <Container>
                <Header>
                    <Heading>
                        Preview
                    </Heading>
                </Header>
                <MiddleContainer>
                    <FormPreview>
                        Preview
                        <Droppable droppableId={'preview-form'} isDropDisabled={true}>
                            {
                                (provided) => (
                                    <Preview
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {
                                            form?.length ? (
                                                form?.map((obj: any, index: number) => (
                                                    <div key={obj.id}>
                                                        {renderForm(obj, index)}
                                                    </div>
                                                ))
                                            ) : (
                                                'No Form Selected'
                                            )
                                        }
                                        {provided.placeholder}
                                    </Preview>
                                )
                            }
                        </Droppable>
                    </FormPreview>
                    <OtherData>
                        Data
                        <Data>
                            {
                                viewData && (
                                    JSON.stringify(data)
                                )
                            }
                        </Data>
                        Errors
                        <Data>
                            {
                                errors.length && (
                                    errors
                                )
                            }
                        </Data>
                        Events
                        <Data>

                        </Data>
                    </OtherData>
                </MiddleContainer>
                <Footer>
                    <SubmitButton onClick={errors.length ? () => { } : onSubmit} />
                </Footer>
            </Container>
        </DragDropContext>
    );
};

export default PreviewForm;