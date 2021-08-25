import React from 'react';
import { whiteDragIcon } from '../../assets';
import DraggableBox from '../DraggableBox';
import { Container, Icon, Text } from './styles';

interface FormOptionProps {
    id: string;
    index: number;
    name: string;
};

const FormOption = ({
    id,
    index,
    name
}: FormOptionProps) => {
    return (
        <DraggableBox id={id} index={index} isSelectionPane={true}>
            <Container>
                <Icon src={whiteDragIcon} alt={'drag'} width={'20px'} height={'20px'} />
                <Text>{name}</Text>
            </Container>
        </DraggableBox>
    );
};

export default FormOption;