import React from 'react'


import {
    MediaDiv,
    Footer,
    Main,
} from '../css/styledComponenet';
import Header from '../components/Header';
import SignUpMain from '../components/SignUpMain';


function SignUpMainPage() {
    return (
        <>
            <MediaDiv>
                <Header/>
                <Main>
                    <SignUpMain/>
                </Main>
            </MediaDiv>
        </>
    )
}

export default SignUpMainPage