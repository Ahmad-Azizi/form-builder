import React from 'react';
import { DraggableBox } from '..';
import { Container } from './styles';

interface DividerFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    onDuplicate?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};

const DividerField = ({
    id,
    index,
    isDragDisabled,
    onDuplicate = () => { },
    onEdit = () => { },
    onDelete = () => { }
}: DividerFieldProps) => {
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
            <Container />
        </DraggableBox>
    );
};

DividerField.defaultProps = {
    isDragDisabled: false
};

export default DividerField;