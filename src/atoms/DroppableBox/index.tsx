import React, { ReactChild } from 'react';
import { Droppable } from 'react-beautiful-dnd';

interface DroppableBoxProps {
    id: string;
    isDropDisabled?: boolean;
    children: ReactChild;
};

const DroppableBox = ({
    id,
    isDropDisabled = false,
    children
}: DroppableBoxProps) => (
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {
            (provided) => {
                const { innerRef, droppableProps, placeholder } = provided;
                return (
                    <div
                        ref={innerRef}
                        {...droppableProps}
                    >
                        {children}
                        {placeholder}
                    </div>
                )
            }
        }
    </Droppable>

);

export default DroppableBox;