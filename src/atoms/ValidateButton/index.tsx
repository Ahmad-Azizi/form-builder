import React from 'react';
import { validateIcon } from '../../assets';
import { ButtonContainer, ButtonText, Icon } from './styles';

interface ValidateButtonProps {
    onClick: () => void;
};

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