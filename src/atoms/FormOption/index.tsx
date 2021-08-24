import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { dragIcon } from '../../assets';

interface FormOptionProps {
    id: string;
    index: number;
    name: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px dotted white;
    border-radius: 20px;
    width: 20vh;
    height: 5vh;
    align-items: center;
    margin-bottom: 3vh;
    padding: 5px;
    background-color: #067AFF;
`;
const Icon = styled.img`
    margin-right: 2vh;
`;
const Text = styled.label`
    color: white;
    font-weight: bold;
`;

const FormOption = ({
    id,
    index,
    name
}: FormOptionProps) => {
    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Icon src={dragIcon} alt={'drag'} width={'20px'} height={'20px'} />
                        <Text>{name}</Text>
                    </Container>
                )
            }
        </Draggable>
    );
};

export default FormOption;