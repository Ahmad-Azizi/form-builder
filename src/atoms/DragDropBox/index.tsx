import React, { ReactChild } from "react";
import { DragDropContext } from "react-beautiful-dnd";

interface DragDropBoxProps {
    onDragEnd: (a: object) => void;
    children: ReactChild;
}

const DragDropBox = ({
    onDragEnd,
    children
}: DragDropBoxProps) => (
    <DragDropContext onDragEnd={onDragEnd}>
        {children}
    </DragDropContext>
);

export default DragDropBox;