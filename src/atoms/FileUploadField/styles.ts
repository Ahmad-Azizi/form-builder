import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px dotted black;
    border-radius: 20px;
    width: 15vh;
    height: 2vh;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding: 5px;
    background-color: white;
`;

export const Icon = styled.img`
    margin-right: 2vh;
`;
export const Uploader = styled.input`
    opacity: 0;
    width: 4px;
`;
export const Text = styled.label`
    font-size: 12px;
    font-weight: normal;
`;