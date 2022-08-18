import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    MediaDiv,
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
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    
    return (
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
                    <InfoBig>여러 경험들을 <span>구경하고 공유해요</span></InfoBig>
                    <InfoSmall>어떤 경험들이 궁금하신가요? 당신만의 특별한 경험을 알려주고, 다른 사람들의 경험도 둘러보세요!</InfoSmall>
                </MenuInfo>
                <NavBar/>
            </Header>

            <ListMain>
                <Kategorie/>
                <PostList/>
            </ListMain>

        </MediaDiv>
    )
}

export default SellPostList;