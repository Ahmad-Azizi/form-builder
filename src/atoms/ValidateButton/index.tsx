import React from 'react';
import styled from 'styled-components';
import { validateIcon } from '../../assets';

interface ValidateButtonProps {
    onClick: () => void;
};

const ButtonContainer = styled.div`
	display: flex;
    flex-direction: row;
    border-radius: 20px;
    width: 20vh;
    height: 3vh;
	justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: white;
    border: 1px solid #067AFF;
`;
const Icon = styled.img`
    margin-right: 2vh;
    margin-left: -5vh;
`;
const ButtonText = styled.label`
	color: #067AFF;
	font-weight: bold;
`;

const ValidateButton = ({
    onClick
}: ValidateButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            <Icon src={validateIcon} alt={'drag'} width={'20px'} height={'20px'} />
            <ButtonText>Validate</ButtonText>
        </ButtonContainer>
    );
};

export default ValidateButton;