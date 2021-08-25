import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DragDropBox, DroppableBox, SubmitButton } from '../../atoms';
import {
    CheckboxField,
    InputField,
    FileUpload,
    TextField,
    DividerField
} from '../../atoms';
import { Container, Data, Footer, FormPreview, Header, Heading, MiddleContainer, OtherData, Preview } from './styles';

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
        <DragDropBox onDragEnd={() => { }}>
            <Container>
                <Header>
                    <Heading>
                        Preview
                    </Heading>
                </Header>
                <MiddleContainer>
                    <FormPreview>
                        Preview
                        <DroppableBox id={'preview-form'} isDropDisabled={true}>
                            <Preview>
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
                            </Preview>
                        </DroppableBox>
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
        </DragDropBox>
    );
};

export default PreviewForm;