import React from 'react';
import styled from 'styled-components';
import { saveIcon } from '../../assets';

interface SaveButtonProps {
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
    background-color: #067AFF;
`;
const Icon = styled.img`
    margin-right: 2vh;
    margin-left: -5vh;
`;
const ButtonText = styled.label`
	color: white;
	font-weight: bold;
`;

const SaveButton = ({
    onClick
}: SaveButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            <Icon src={saveIcon} alt={'drag'} width={'20px'} height={'20px'} />
            <ButtonText>Save</ButtonText>
        </ButtonContainer>
    );
};

export default SaveButton;