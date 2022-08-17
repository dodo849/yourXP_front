import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

import {
    NavbarDiv,
    NavTitle,
    Navbar,
    NavBox,
} from '../css/styledComponenet';

function NavBar() {
    //네비박스
    const [ sell, setSell] = useState(false);
    const [ buy, setBuy] = useState(false);

    return (
        <NavbarDiv>
            <NavTitle>
                <p>
                    <NavLink
                        to ="/selllist"
                        // onClick={}
                        >경험 둘러보기</NavLink>
                </p>
                
                <p>
                    <NavLink
                        to ="/buylist"
                        // onClick={}
                        >궁금한 경험들</NavLink>
                </p>
                <NavBox><div className='box'> </div></NavBox>
            </NavTitle>
            <Navbar>
                <hr/>
            </Navbar>
        </NavbarDiv>
    )
}

export default NavBar