import React from 'react';
import { saveIcon } from '../../assets';
import { ButtonContainer, ButtonText, Icon } from './styles';

interface SaveButtonProps {
    onClick: () => void;
};

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