import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;
export const PopoverContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;
export const EmptySpace = styled.div`
    width: 85%;
`;
export const Popover = styled.div`
    border: 1px solid lightgrey;
    background-color: #F6F6F6;
    border-radius: 20vh;
    width: 15%;
    height: 5vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
`;
export const Option = styled.img`
    width: 25px;
    height: 25px;
`;