import { DraggableBox } from '..';
import React, { useState, useCallback, useEffect } from 'react';;

interface CheckboxFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    onDuplicate?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    getChecked: Function;
};

const CheckboxField = ({
    id,
    index,
    isDragDisabled,
    onDuplicate = () => { },
    onEdit = () => { },
    onDelete = () => { },
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
        <DraggableBox
            id={id}
            index={index}
            isDragDisabled={isDragDisabled}
            onDuplicate={onDuplicate}
            onEdit={onEdit}
            isEditable={false}
            onDelete={onDelete}
        >
            <input
                type={'checkbox'}
                checked={checked}
                onChange={isDragDisabled ? ({ target: { checked } }) => setChecked(checked) : () => { }}
            />
        </DraggableBox>
    );
};

CheckboxField.defaultProps = {
    isDragDisabled: false
};

export default CheckboxField;