import React, { useState, useCallback, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface CheckboxFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    getChecked: Function;
};

const Container = styled.div``;
const Checkbox = styled.input``;

const CheckboxField = ({
    id,
    index,
    isDragDisabled,
    getChecked
}: CheckboxFieldProps) => {
    const [checked, setChecked] = useState(false);

    const memoisedCallback = useCallback(() => {
        getChecked(checked);
    }, [checked, getChecked])

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
                        <Checkbox
                            type={'checkbox'}
                            checked={checked}
                            onChange={isDragDisabled ? ({ target: { checked } }) => setChecked(checked) : () => {}}
                        />
                    </Container>
                )
            }
        </Draggable>
    );
};

CheckboxField.defaultProps = {
    isDragDisabled: false
};

export default CheckboxField;