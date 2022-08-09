import styled from "styled-components";

//main
export const Main = styled.div`
    padding: 0 370px;
`;

export const MediaDiv = styled.div`
    margin: 0px auto;
    width: 1440px;
`;

//Header
export const HeaderDiv = styled.div`
    width: 1440px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

//로고,검색창,로그인,회원가입
export const TopDiv = styled.div`
    width: 1300px;
    margin-Top: 25px;
    margin-right: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SearchSign = styled.div`
    width: 720px;
    color: #767676;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
`;

export const Search = styled.div`
    width: 380px;
    height: 50px;
    border: 1px solid #439F68;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;

    input {
        width: 300px;
        border: none;
        font-size: 16px;
        font-weight: regular;
    }

    input:focus {
        outline: none;
    }
`;

export const Sign = styled.div`
    width: 125px;
    font-size: 16px;
    font-weight: regular;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left:50px;
    padding-right:10px;
`;

//네비바
export const NavbarDiv = styled.div`
    width: 1300px;
    margin-right: 50px;
    margin-left: 50px;
`;

export const NavTitle = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #767676;
`;

export const Navbar = styled.div`
    display: column;
    hr {
        color: #BFBFBF;
        opacity: 50%;
        margin: 0;
        padding: 0;
    }
`;




//본문
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
        color: #BFBFBF;
        opacity: 50%;
        margin: 25px 0px;
        padding: 0;
    };
`;

//프로필
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
    align-items: flex-end;
`;

//포인트
export const PointDiv = styled.div`
    width: 120px;
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

//작성글
export const PostContentDiv = styled.div`
    padding: 17px;
    padding-top: 10px;
    display: column;

    hr {
        border: none;
        color: #BFBFBF;
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
`;

//구매부분
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
export const BuyButton = styled.button`
    width: 90px;
    height: 40px;
    font-size: 16px;
    color: white;
    background-color: #439F68;
    border: none;
    border-radius: 10px;
    padding: 0px 13px;
    margin : 15px 15px 20px 0px;
`;


//후기
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


//Footer
export const Footer = styled.div`
    width: 100%;
    height: 150px;
    background-color: #EBEBEB;
    align-items: center;

    p {
        padding: 55px;
        font-size : 12px;
        color: #767676;
    }
`;


export const TestStyle = styled.div`
    color: red;
    border: 1px solid black;
`;