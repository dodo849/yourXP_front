import styled from "styled-components";

export const MainPoint = styled.div`
    width 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const NowPointDiv = styled.div`
    width: 650px;
    margin: 60px 0 30px 0;
`;
export const NowPoint = styled.div`
    width: 650px;
    height: 85px;
    background-color: #ffffff;
    border: 1px solid #BFBFBF;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`;
export const ImgAndText = styled.div`
    margin: 0 30px;
    display: flex;
    align-items: center;
`;
export const PointPrice = styled.div`
    margin: 0 30px;
    display: flex;
    align-items: center;
`;
export const PointBig = styled.div`
    font-size:28px;
    font-weight: 500;
    margin: 0 10px;
    color: #767676;
`;
export const PointText = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: #5CBE81;
    margin-right: 10px;
`;

//검색창
export const SearchPointDiv = styled.div`
    width: 1024px;
    height: 80px;
    background-color: #EBEBEB;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CalenderSelectDiv = styled.div`
    display: flex;
    `;
export const CalenderSelect = styled.div`
    margin: 0 20px;
    input {
        width: 130px;
        height: 30px;
        padding: 0 10px;
        border: 0;
        border-radius: 5px;

        &:focus {
            outline: none;
        }
    }
`;
export const SearchPoint = styled.div`
    width: 370px;
    height: 40px;
    border: 1px solid #439F68;
    background-color: #F8F8F8;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-right: 20px;

    input {
        width: 500px;
        border: none;
        font-size: 14px;
        font-weight: regular;
        background-color: #F8F8F8;
    }

    input:focus {
        outline: none;
    }

`;
export const PointDiv = styled.div`
    width: 1024px;
    display: flex;
    flex-direction: column;

    hr{
        background-color: #bfbfbf;
        opacity: 50%;
        height: 1px;
        margin: 0;
        padding: 0;
        border: none;
    }
`;
export const PointBox = styled.div`
    width: 994px;
    display: flex;
    align-items: center;
    padding: 0 15px;
`;
export const PointUse = styled.div`
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const Date = styled.span`
    font-size: 12px;
    color: #767676;
`;
export const Use = styled.span`
    font-size: 20px;
    color: #000000;
`;
export const PointPost = styled.span`
    width: 400px;
    margin: 0 100px;
    font-size: 16px;
    color: #767676;
`;
export const PointMinus = styled.span`
font-size: 24px;
color: #DC4646;
`;
export const PointPlus = styled.span`
font-size: 24px;
color: #5CBE81;
`;
export const RemainPoint = styled.span`
font-size: 16px;
color: #767676;
margin-left: auto;
`;
