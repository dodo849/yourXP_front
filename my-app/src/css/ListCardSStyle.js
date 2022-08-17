import styled from "styled-components";

export const Line = styled.hr`
    hr {
        height: 1px;
        border: none;
        background-color: #BFBFBF;
        opacity: 50%;
    }
`;

//List
export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ListInfo = styled.div`
    display: flex;
    cursor: pointer;
`;
export const ListText = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-start; 
`;
export const Img = styled.div`
    width: 220px;
    height: 125px;
    background-color: #767676;
    border: none;
    border-radius: 10px;
    margin: 10px 20px 10px 15px;
`;
export const Title = styled.span`
    font-size: 18px;
    font-weight: 900;
    color: #000000;
    margin: 15px 0px 5px 0px;

    &:hover {
        color: #439F68;
        transition: .3s cubic-bezier(.25,.8,.25,1)!important;
    }
`;
export const Summary = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #767676;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const Tag = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #439F68;
    margin-top: 15px;
    cursor: poiner;

    &:hover {
        color: #5CBE81;
        transition: .3s cubic-bezier(.25,.8,.25,1)!important;
    }
`;
export const Check = styled.div`
    h6 {
        color: #767676;
        font-size: 12px;
        font-weight: 300;
        margin: 10px 0px;
    }
`;

export const ListInfo2 = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
`;
export const Heart = styled.div`
    width: 65px;
    height: 30px;
    border: 0.5px solid #439F68;
    border-radius: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    p{
        font-size: 14px;
        color: #439f68;
        font-weight: 500;
    }

    hr{
        height:30px;
        width: 0.5px;
        border-width:0;
        opacity: 100%;
        background-color:#439f68;
        margin: 0;
        }

`;
export const Price = styled.div`
    width: 150px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #D9ECE1;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;

    p{
        color: #5CBE81;
    }
    span {
        color: #439F68;
    }
`;

