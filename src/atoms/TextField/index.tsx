import React from 'react';
import DraggableBox from '../DraggableBox';
import { Text } from './styles';

interface TextFieldProps {
	id: string;
	index: number;
	isDragDisabled?: boolean;
	onDuplicate?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
	label?: string;
};

const TextField = ({
	id,
	index,
	isDragDisabled = false,
	onDuplicate = () => { },
	onEdit = () => { },
	onDelete = () => { },
	label = 'Label Text'
}: TextFieldProps) => {
	return (
		<DraggableBox
			id={id}
			index={index}
			isDragDisabled={isDragDisabled}
			onDuplicate={onDuplicate}
			onEdit={onEdit}
			onDelete={onDelete}
		>
			<Text>
				{label}
			</Text>
		</DraggableBox>
	);
};

export default TextField;