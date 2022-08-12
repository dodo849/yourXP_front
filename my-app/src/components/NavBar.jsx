import React from 'react'
import { NavLink } from 'react-router-dom';

import {
    NavbarDiv,
    NavTitle,
    Navbar,
} from '../css/styledComponenet';

function NavBar() {
    const boxstyle = {
        width: '125px',
        height: '7px',
        backgroundColor: '#5CBE81'
    };

    const Navstyle = {
        color: '#000000',
    };

    return (
        <NavbarDiv>
            <NavTitle>
                <p>
                    <NavLink
                        to ="/selllist"
                        style={({isActive})=> {
                            return {
                                textDecoration : isActive ? "none":"none",
                                color: isActive ? "#000000" : "#767676",
                            }
                        }}>경험 둘러보기</NavLink>
                </p>
                <p>
                    <NavLink
                        to ="/buylist"
                        style={({isActive})=> {
                            return {
                                textDecoration : isActive ? "none":"none",
                                color: isActive ? "#000000" : "#767676",
                            }
                        }}>궁금한 경험들</NavLink>
                </p>
            </NavTitle>
            <Navbar>
                <div style={boxstyle}> </div>
                <hr/>
            </Navbar>
        </NavbarDiv>
    )
}

export default NavBar