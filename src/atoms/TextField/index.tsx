import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface TextFieldProps {
	id: string;
	index: number;
	isDragDisabled?: boolean;
	label?: string;
};

const Container = styled.div``;
const Text = styled.label`
	font-weight: bold;
`;

const TextField = ({
	id,
	index,
	isDragDisabled,
	label
}: TextFieldProps) => {
	return (
		<Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
			{
				provided => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<Text>
							{label}
						</Text>
					</Container>
				)
			}
		</Draggable>
	);
};

TextField.defaultProps = {
	label: 'Label Text',
	isDragDisabled: false
};

export default TextField;