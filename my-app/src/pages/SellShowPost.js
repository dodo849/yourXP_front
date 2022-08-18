import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    MediaDiv,
    Main,
    Header,
    TopDiv,
    SearchSign,
    Search,
    Sign,
    MenuInfo,
    InfoBig,
    InfoSmall,
} from '../css/styledComponenet';

import Logo from '../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

import NavBar from '../components/NavBar';
import ShowPost from '../components/ShowPost';
import ShowReview from '../components/ShowReview';


function SellShowPost() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <>
            <MediaDiv>
                <Header>
                    <TopDiv>
                        <img onClick={goHome} src={Logo} width='170px' height='48px'/>
                        <SearchSign>
                            <Search>
                                <input type="text" placeholder='어떤 경험을 찾고 계신가요?' />
                                <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68' cursor='pointer'/>
                            </Search>
                            <Sign>
                                <p>로그인</p>
                                <p>회원가입</p>
                            </Sign>
                        </SearchSign>  
                    </TopDiv>

                    <MenuInfo>
                        <InfoBig>여러 경험을 <span>들어봐요</span></InfoBig>
                        <InfoSmall>다른 사람의 경험을 읽고 반응을 남겨주세요!</InfoSmall>
                    </MenuInfo>
                    <NavBar/>
                </Header>
                
                <Main>
                    <ShowPost/>
                    <ShowReview/>
                </Main>
            </MediaDiv>
        </>
    )
}

export default SellShowPost