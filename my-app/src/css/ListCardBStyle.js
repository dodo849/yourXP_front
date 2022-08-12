import styled from "styled-components";

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 20px;
`;

export const Price = styled.div`
    width: 310px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #D9ECE1;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    padding: 0px 10px;
    margin-bottom: 15px;

    p{
        color: #5CBE81;
    }
    span {
        color: #439F68;
    }
`;

export const PointDiv = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
    margin : 10px 0px;
`;