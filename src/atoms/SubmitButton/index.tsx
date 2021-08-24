import React from 'react';
import styled from 'styled-components';

interface SubmitButtonProps {
    onClick: () => void;
};

const ButtonContainer = styled.div`
	display: flex;
    flex-direction: row;
    width: 20vh;
    height: 3vh;
	justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: #067AFF;
    border-radius: 1vh;
`;
const ButtonText = styled.label`
	color: white;
	font-weight: bold;
`;

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