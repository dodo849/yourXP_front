import styled from "styled-components";

//Media
export const MediaDiv = styled.div`
    margin: 0px auto;
`;

//main
export const Main = styled.div`
    width: 700px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const ListMain = styled.div`
    width: 1024px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 20px;
`;


//Header
export const Header = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const HeaderDiv = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;

//Header-Logo, Search, Sign
export const TopDiv = styled.div`
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

    p {
        cursor: pointer;
    }
`;

//Header-Navbar
export const NavbarDiv = styled.div`
    margin-right: 50px;
    margin-left: 50px;
`;

export const NavTitle = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-decoration: none;
    color: #767676;

    a:hover {
        color: #000000;
    }
`;

export const Navbar = styled.div`
    display: column;
    hr {
        background-color: #BFBFBF;
        opacity: 50%;
        height: 1px;
        margin: 0;
        padding: 0;
        border: none;
    }
`;

//Header-MenuInfo
export const MenuInfo = styled.div`
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


//ListSearch
export const PostListDiv = styled.div`
    width: 870px;
    margin-left: 30px;
    padding: 20px 0px 20px 20px;

    hr {
        background-color: #BFBFBF;
        height: 1px;
        border: none;
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

//ListButton
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
    cursor: pointer;
`;

//List-More
export const MoreDiv = styled.div`
    display:flex;
    justify-content: center;    
`;
export const GrayButton = styled.button`
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