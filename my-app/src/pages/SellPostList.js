import React, {useState, useEffect} from 'react'
import {
    MediaDiv,
    Footer,
    ListMain,
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
import Kategorie from '../components/Kategorie';
import PostList from '../components/PostList';


function SellPostList() {


    return (
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
                    <InfoBig>여러 경험들을 <span>구경하고 공유해요</span></InfoBig>
                    <InfoSmall>어떤 경험들이 궁금하신가요? 당신만의 특별한 경험을 알려주고, 다른 사람들의 경험도 둘러보세요!</InfoSmall>
                </MenuInfo>
                <NavBar/>
            </Header>

            <ListMain>
                <Kategorie/>
                <PostList/>
            </ListMain>
            <Footer>
                <p>ⓒ멋쟁이사자처럼 10th at 경상국립대<br/>강경아 강지희 김민지 박재욱 박경훈 송채율 이도연 이재성</p>
            </Footer>
        </MediaDiv>
    )
}

export default SellPostList;