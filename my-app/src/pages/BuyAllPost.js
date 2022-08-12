import React from 'react'
import {
    MediaDiv,
    Footer,
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
import WonderPost from '../components/WonderPost';

function BuyAllPost() {
    return (
        <>
            <MediaDiv>
                <Header>
                    <TopDiv>
                        <img src={Logo} width='170px' height='48px' />
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
                        <InfoBig>당신의 경험이 <span>필요해요</span></InfoBig>
                        <InfoSmall>자신의 경험을 사람들에게 채팅으로 알려주세요!</InfoSmall>
                    </MenuInfo>
                    <NavBar/>
                </Header>

                <Main>
                    <WonderPost/>
                </Main>

                <Footer>
                    <p>ⓒ멋쟁이사자처럼 10th at 경상국립대<br/>강경아 강지희 김민지 박재욱 박경훈 송채율 이도연 이재성</p>
                </Footer>
            </MediaDiv>
        </>
    )
}

export default BuyAllPost