import styled from "styled-components";

export const ButtonContainer = styled.div`
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
export const Icon = styled.img`
    margin-right: 2vh;
    margin-left: -5vh;
`;
export const ButtonText = styled.label`
	color: #067AFF;
	font-weight: bold;
`;