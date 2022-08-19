import styled from "styled-components";

//카테고리
export const KategorieDiv = styled.div`
    padding-top: 135px;
    width: 110px;
    display: column;
`;
export const KategorieButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
export const BigTag = styled.span`
    font-size: 14px;
    font-color: #000000;
    font-weight: 500;
    cursor: pointer;
`;

export const ListDiv = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: stretch;
    justify-content: space-between;

    img {
        margin-right: 5px;
    }
`;

export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 35px;
    
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #767676;
        margin: 5px 0px;
        cursor: pointer;

        &:hover {
            color: #000000;
        }
    }
`;