import React from 'react'

import {
    HeaderDiv,
    TopDiv,
    SearchSign,
    Search,
    Sign,
} from '../css/styledComponenet';

import NavBar from './NavBar';

import Logo from '../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const boxstyle = {
        width: '125px',
        height: '7px',
        backgroundColor: '#5CBE81'
    };

    const Navstyle = {
        color: '#000000',
    };

    return (
        <HeaderDiv>
            <TopDiv>
                <img src={Logo} width='170px' height='48px' />
                <SearchSign>
                    <Search>
                        <input type="text" placeholder='어떤 경험을 찾고 계신가요?' />
                        <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68'cursor='pointer'/>
                    </Search>
                    <Sign>
                        <p>로그인</p>
                        <p>회원가입</p>
                    </Sign>
                </SearchSign>  
            </TopDiv>
            <NavBar/>
        </HeaderDiv>
    )
}

export default Header