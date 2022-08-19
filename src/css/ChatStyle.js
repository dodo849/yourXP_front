import styled from "styled-components";

export const MainDiv = styled.div` 
    width: 1024px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;
export const MenuDiv = styled.div`
    width: 1024px;
    padding: 5px;
    margin: 40px 0 20px 0;
`;
export const Text = styled.span`
    font-size: 32px;
    font-weight: 700;
    color: #000000;    
`;

export const ChatDiv = styled.div`
    display: flex;
`;

export const ChatListDiv = styled.div`
    margin: 0 5px;
    width: 270px;
    display: flex;    
    flex-direction: column;
`;
export const ListBox = styled.button`
    border: 1px solid #BFBFBF;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 15px;
    width: 270px;
    height: 70px;
    display: flex;

    &:hover{
        border: 1px solid #439F68;
        cursor: pointer;
    }
    
`;
export const Img = styled.image`
    width: 45px;
    height: 45px;
    border-radius:10px;
    background-color: #767676;
    margin: 10px;
`;
export const UserContent = styled.div`
    display: flex;
`;
export const Summary = styled.div`
    width: 135px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0px;
`;
export const User = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 2px;
`;
export const Content = styled.span`
    font-size: 12px;
    color: #767676;
`;
export const Date = styled.div`
    
    font-size: 12px;
    color: #767676;
    margin-top: 10px;
`;

export const ChatContentDiv = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
`;

export const ChatContent = styled.div`
    margin: 0 10px;
    margin-bottom: 10px;
    width: 725px;
    height: 390px;
    background-color: rgb(217,236,225, 0.2);
    border: 1px solid #D9ECE1;
    border-radius: 10px;
    display: flex;
    padding: 10px;
`;

//chatting
export const Chatting = styled.div`
    width: 650px;
    padding: 5px 10px 0 0;
`;
export const UserName = styled.span`
    font-size: 14px;
    font-weight: 700;

`;
export const YourTextBox = styled.div`
    width: max-content;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #BABABA;
    padding: 20px;
    border-radius: 0 30px 30px 30px;
    font-size: 16px;
    margin: 10px 10px 15px 0;
`;
export const MyTextBox = styled.div`
    width: 600px;
    height: auto;
    background-color: #ffffff;
    border: 1px solid #439F68;
    padding: 20px;
    border-radius: 30px 30px 0px 30px;
    font-size: 16px;
    margin: 10px 10px 15px 0;
`;

//chatbar
export const ChatBarDiv = styled.div`
    margin: 0 10px;
    width: 725px;
    height: 40px;
    background-color: #ffffff;
    border: 1px solid #D9ECE1;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;

    input {
        height: 40px;
        padding-left: 20px;
        border: none;
        width: 570px;
        background-color: #D9ECE1;
        border-radius: 25px;
        font-size: 16px;

        &:focus{
            outline:none;
        }
    }
`;

