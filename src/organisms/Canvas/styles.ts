import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: white
    width: 70%;
	height: 100vh;
	flex-direction: column;
    justify-content: center;
	align-items: center;
`;
export const Heading = styled.h3`
    color: grey;
    font-weight: bold;
`;
export const CanvasList = styled.div`
	height: 85vh;
    width: 130vh;
`;
export const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 50vh;
`;