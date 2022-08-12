import styled from "styled-components";

//본문-경험글
export const PostSection = styled.div`
    width: 700px;
    margin-Top: 75px;
    display: column;
`;

export const PostTitleDiv = styled.div`
    padding: 17px;
    padding-bottom: 0px;
    font-size: 30px;
    h2 {
        margin : 0px;
        margin-bottom: 15px;
        padding: 0;
    };
    hr {
        background-color: #BFBFBF;
        height: 1px;
        border: none;
        opacity: 50%;
        margin: 15px 0px;
        padding: 0;
    };
`;

//본문-경험글-프로필
export const ProfilePic = styled.div`
    img {
        width: 45px;
        height: 45px;
        border-radius: 10px;
    };
    margin: 5px;
    margin-left: 0px;
`;

export const Profile = styled.div`
    margin: 10px;
    width: 160px;
`;

export const ProfileDiv = styled.div`
    p {
        font-size: 16px;
        margin: 0;
        font-weight: bold;
    }

    h6 {
        font-size: 12px;
        font-weight: lighter;
        margin: 5px 0px;
    }
    witdh: 700px;
    display: flex;
    align-items: center;
`;

export const MoreButton = styled.button`
    margin-right: 10px;
    margin-left: 415px;
    background-color: white;
    border: none;
    padding: 0px;
    opacity: 70%;
`;

//본문-경험글-포인트
export const PointDiv = styled.div`
    width: 160px;
    display: flex;
    justify-content: space-between;
    margin : 10px 0px;
`;

export const Point = styled.span`
    font-size: 16px;
    color: #5CBE81;
    font-weight: normal;
`;
export const PointPrice = styled.span`
    font-size: 16px;
    color: #439F68;
    font-weight: normal;
`;

//본문-경험글-작성글
export const PostContentDiv = styled.div`
    padding: 17px;
    padding-top: 10px;
    display: column;

    hr {
        border: none;
        background-color: #BFBFBF;
        opacity: 50%;
        margin: 15px 0px;
        padding: 0;
        width: 100%;
        height: 1px;
        display: block;
        background: linear-gradient(to left, #fff 50%, #BFBFBF 50%);
        background-size: 15px 1px;
    };
`;

export const PostContent = styled.span`
    font-size: 16px;
    color: #6C6C6C;
`;

export const PostTag = styled.button`
    width: auto;
    padding: 5px 15px;
    height: 32px;
    background-color: #D9ECE1;
    border-radius: 10px;
    color: #439F68;
    font-size: 14px;
    border: none;
    margin: 30px 25px 30px 0px;
    cursor: pointer;
`;

export const PostImgDiv = styled.div`
    display: flex;
    margin: 5px 40px;

`;

export const PostImg = styled.div`
    img {
        width: 280px;
        height: auto;
        margin: 5px;
        border: none;
        border-radius:10px;
    }    

`;

export const PostReact = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;
`;

//본문-경험글-구매부분
export const PostBuyDiv = styled.div`
    padding: 17px;
    padding-top: 0px;
`;
export const PostBuyInfo = styled.span`
    font-size: 14px;
    color: #000000;
`;
export const PostBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const BuyPreDiv = styled.div`
    display: flex;

`;
export const BuyPre = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    margin : 15px 15px 20px 0px;
    padding: 0px 12px;
    p {
        font-size: 10px;
        color: #767676;
    }
`;
export const BuyPreInfo = styled.span`
    margin-right: 5px;
    font-size: 14px;
    color: #767676;
`;
export const BuyPreNum = styled.span`
    margin: 5px 3px 5px 5px;
    font-size: 14px;
    color: #439F68;
`;

export const HeartDiv = styled.div`
    margin: 40px 300px 0px 300px;
`;


//본문-경험글-후기
export const ReviewSection = styled.div`
    width: 666px;
    margin-Top: 15px;
    padding: 17px;
    display: column;
`;
export const ReviewTitle = styled.span`
    font-size: 16px;
    color: #767676;
`;
export const ReviewBox = styled.div`
    margin: 15px 0px 45px 0px;
    padding: 20px;
    height: auto;
    border: 1px solid #439F68;
    border-radius: 10px;
`;
export const Reviewinput = styled.textarea`
    font-size: 16px;
    color: #439F68;
    border: none;
    background-color: white;
    width: 620px;
    height: 90px;
    resize: none;

    &:focus {
        outline: none; // 활성화 효과 빼기
    }
`;

export const ReviewContent = styled.span`
    font-size: 16px;
    color: #000000;
`;

export const ReviewInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    margin-left: 315px;
`;

export const ReviewInfo2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 15px;
`;

export const Reviewer = styled.span`
    font-size: 16px;
    color: #439F68;
    margin: 0px 5px;
`;
export const ReviewGrade = styled.div`
    width: auto;
    height: 25px;
    font-size: 16px;
    color: white;
    background-color: #439F68;
    border: none;
    border-radius: 10px;
    padding: 0px 10px;
    margin: 0px 10px;
`;
export const ReviewStar = styled.div`
    margin-left: 5px;
`;