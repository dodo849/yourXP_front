import styled from "styled-components";

export const StandardModalDiv = styled.div`
    padding: 5px 0px;
    width: 90px;
    height: 100px;
    border: 1px solid #439F68;
    background-color: #ffffff;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    hr {
        background-color: #BABABA;
        height: 0.5px;
        margin: 0px;
        border: none;
    }
`;

export const Modal = styled.button`
    display: flex;
    border: none;
    background-color: white;
    justify-content: space-evenly;
`;

export const Text = styled.span`
    font-size: 14px;
    color: #767676;  
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
        color: #439F68;  
    }
`;