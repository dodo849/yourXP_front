import styled from "styled-components";

//main
export const Main = styled.div`
    padding: 0 370px;
`;

export const Main2 = styled.div`
    padding: 0 208px;
    display: flex;
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

//메뉴설명
export const MenuInfodiv = styled.div`
    width: 1300px;
    margin: 50px 50px 15px 50px;
    display: flex;
    flex-direction: column;
    
`;
export const InfoBig = styled.span`
    font-size: 32px;
    color: #000000;
    font-weight: 900;
    span {
        color: #439F68;
    }
`;
export const InfoSmall = styled.span`
    font-size: 16px;
    color: #767676;
    padding-left: 4px;
    font-weight: 400;
`;


//본문

//본문-경험글리스트-카테고리
export const KategorieDiv = styled.div`
    padding-top: 135px;
    width: 100px;
    display: column;
`;
export const KategorieButton = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    img {
        margin-right: 5px;
    }
`;
export const BigTag = styled.span`
    font-size: 14px;
    font-color: #000000;
    font-weight: 500;
    margin-right: 10px;
`;

//본문-경험글리스트
export const PostListDiv = styled.div`
    width: 870px;
    margin-left: 30px;
    padding: 20px 0px 20px 20px;

    hr {
        color: #BFBFBF;
        opacity: 50%;
    }
`;
export const PostSearchDiv = styled.div`
    display: flex;
    width: 880px;
    align-items: center;
    justify-content: center;
`;
export const PostSearch = styled.div`
    width: 525px;
    height: 50px;
    border: 1px solid #439F68;
    background-color: #F8F8F8;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    input {
        width: 500px;
        border: none;
        font-size: 16px;
        font-weight: regular;
        background-color: #F8F8F8;
    }

    input:focus {
        outline: none;
    }
`;
export const Button = styled.div`
    display: flex;
    width: 865px;
    justify-content: flex-end;
    margin-right: 25px;
`;
export const WhiteButton = styled.div`
    width: 90px;
    height: 40px;
    font-size: 16px;
    color: #439F68;
    background-color: white;
    border: 1px solid #439F68;
    border-radius: 10px;
    margin : 15px 15px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//본문-경험글리스트-본문
export const ListDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ListInfo = styled.div`
    display: flex;    
`;
export const ListText = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-start; 
`;
export const ListImg = styled.div`
    img {
        width: 220px;
        height: 125px;
        border: none;
        border-radius: 10px;
    }
    margin: 10px 20px 10px 15px;
`;
export const ListTitle = styled.span`
    font-size: 18px;
    font-weight: 900;
    color: #000000;
    margin: 15px 0px 5px 0px;

`;
export const ListSummary = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #767676;
    margin-top: 5px;
`;
export const ListTag = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #439F68;
    margin-top: 15px;
`;
export const ListCheck = styled.div`

    h6 {
        color: #767676;
        font-size: 12px;
        font-weight: 300;
        margin: 10px 0px;
    }
`;
//본문-경험글리스트-본문-조회수,가격
export const ListInfo2 = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
`;
export const ListHeart = styled.div`
    width: 65px;
    height: 30px;
    border: 0.5px solid #439F68;
    border-radius: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

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
export const ListPrice = styled.div`
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
//본문-경험글리스트-본문-더보기
export const MoreDiv = styled.div`
    display:flex;
    justify-content: center;    
`;
export const GrayButton = styled.div`
    width: 110px;
    height: 35px;
    font-size: 16px;
    color: #767676;
    background-color: white;
    border: 1px solid #BABABA;
    border-radius: 10px;
    margin : 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


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
        color: #BFBFBF;
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

//본문-경험글-작성글
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
export const GreenButton = styled.button`
    width: auto;
    height: 40px;
    font-size: 16px;
    color: white;
    background-color: #439F68;
    border: none;
    border-radius: 10px;
    padding: 0px 20px;
    margin : 15px 0px 0px 0px;
    
`;

//본문-경험글-반응
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

    input {
        font-size: 16px;
        color: #439F68;
        border: none;
        background-color: white;
        width: 620px;
    }

    input:focus {
        outline: none;
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
