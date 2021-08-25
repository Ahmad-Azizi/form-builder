import styled from "styled-components";

export const Container = styled.div`
	background-color: #067AFF;
	height: 100vh;
  	width: 20%;
  	float: left;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
`;
export const SavedForms = styled.div`
    background-color: #F6F6F6;
    width: 20%;
    top: 0;
    position: absolute;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
`;
export const Form = styled.label`
    margin-left: 3vh;
    font-weight: normal;
`;
export const Heading = styled.h3`
    color: white;
    font-weight: bold;
    flex-direction: row;
`;
export const Plus = styled.label`
    margin-left: 20vh;
`;