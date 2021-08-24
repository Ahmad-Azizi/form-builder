import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface DividerFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
};

const Container = styled.div`
    border-bottom: 2px solid #067AFF;
    margin-top: 2vh;
    margin-bottom: 2vh;
`;

const DividerField = ({
    id,
    index,
    isDragDisabled
}: DividerFieldProps) => {
    return (
        <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
            {
                (provided) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    />
                )
            }
        </Draggable>
    );
};

DividerField.defaultProps = {
    isDragDisabled: false
};

export default DividerField;