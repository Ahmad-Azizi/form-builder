import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid black;
    flex: 1,
    display: flex;
    margin: 2vh;
    height: 95vh;
`;
export const Header = styled.div`
    margin-left: 1vh;
`;
export const Heading = styled.h1`
    color: grey;
    font-weight: 800px;
`;
export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 1vh;
    margin-right: 1vh;
`;
export const FormPreview = styled.div`
    width: 75%;
`;
export const Preview = styled.div`
    border: 1px solid grey;
    margin-top: 2vh;
    margin-right: 1vh;
    margin-bottom: 2vh;
    height: 70vh;
    padding-top: 3vh;
    padding-left: 3vh;
    padding-right: 3vh;
`;
export const OtherData = styled.div`
    width: 25%;
`;
export const Data = styled.div`
    border: 1px solid grey;
    margin-top: 2vh;
    margin-left: 1vh;
    margin-bottom: 2vh;
    height: 20vh;
`;
export const Footer = styled.div`
    margin-left: 1vh;
`;