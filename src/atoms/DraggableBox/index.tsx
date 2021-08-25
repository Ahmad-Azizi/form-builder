import React, { ReactChild } from "react";
import { Draggable } from "react-beautiful-dnd";
import { blackDragIcon, deleteIcon, duplicateIcon, editIcon } from "../../assets";
import { Container, EmptySpace, Popover, PopoverContainer, Option } from "./styles";

interface DraggableBoxProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    isSelectionPane?: boolean;
    onDuplicate?: () => void;
    onEdit?: () => void | boolean;
    isEditable?: boolean;
    onDelete?: () => void;
    children: ReactChild;
};

const DraggableBox = ({
    id,
    index,
    isDragDisabled = false,
    isSelectionPane = false,
    onDuplicate = () => { },
    onEdit = () => { },
    isEditable = true,
    onDelete = () => { },
    children
}: DraggableBoxProps) => (
    <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
        {
            (provided) => {
                const { innerRef, draggableProps, dragHandleProps } = provided;
                return isSelectionPane || isDragDisabled ? (
                    <Container
                        ref={innerRef}
                        {...draggableProps}
                        {...dragHandleProps}
                    >
                        <div>
                            {children}
                        </div>
                    </Container>
                ) : (
                    <Container
                        ref={innerRef}
                        {...draggableProps}
                    >
                        <PopoverContainer>
                            <EmptySpace />
                            <Popover>
                                <Option src={blackDragIcon} {...dragHandleProps} />
                                <Option src={duplicateIcon} onClick={onDuplicate} />
                                {
                                    isEditable && <Option src={editIcon} onClick={onEdit} />
                                }
                                <Option src={deleteIcon} onClick={onDelete} />
                            </Popover>
                        </PopoverContainer>
                        <div>
                            {children}
                        </div>
                    </Container>
                )
            }
        }
    </Draggable>
);

export default DraggableBox;