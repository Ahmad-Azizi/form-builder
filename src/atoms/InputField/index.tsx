import React, { useCallback, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface InputFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    getInput: Function;
};

const Container = styled.div``;
const TextArea = styled.input``;

const InputField = ({
    id,
    index,
    isDragDisabled,
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
        <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
            {
                (provided) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <TextArea
                            type={'text'}
                            value={input}
                            onChange={isDragDisabled ? ({ target: { value } }) => setInput(value) : () => {}}
                            placeholder={'Enter text here'}
                        />
                    </Container>
                )
            }
        </Draggable>
    );
};

InputField.defaultProps = {
    isDragDisabled: false
};

export default InputField;