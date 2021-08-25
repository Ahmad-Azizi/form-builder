import React, { useCallback, useEffect, useState } from 'react';
import DraggableBox from '../DraggableBox';
import { Container, TextArea } from './styles';

interface InputFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    onDuplicate?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    getInput: Function;
};

const InputField = ({
    id,
    index,
    isDragDisabled = false,
    onDuplicate = () => { },
    onEdit = () => { },
    onDelete = () => { },
    getInput
}: InputFieldProps) => {
    const [input, setInput] = useState('');

    const memoisedCallback = useCallback(() => {
        getInput(input);
    }, [input, getInput])

    useEffect(() => {
        memoisedCallback();
    });

    return (
        <DraggableBox
            id={id}
            index={index}
            isDragDisabled={isDragDisabled}
            onDuplicate={onDuplicate}
            onEdit={onEdit}
            isEditable={false}
            onDelete={onDelete}
        >
            <Container>
                <TextArea
                    type={'text'}
                    value={input}
                    onChange={isDragDisabled ? ({ target: { value } }) => setInput(value) : () => { }}
                    placeholder={'Enter text here'}
                />
            </Container>
        </DraggableBox>
    );
};

export default InputField;