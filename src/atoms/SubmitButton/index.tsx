import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

interface SubmitButtonProps {
    onClick: () => void;
};

const SubmitButton = ({
    onClick
}: SubmitButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            <ButtonText>Submit</ButtonText>
        </ButtonContainer>
    );
};

export default SubmitButton;