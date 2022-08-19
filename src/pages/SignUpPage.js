import React from 'react'
import {
    MediaDiv,
    Footer,
    Main,
} from '../css/styledComponenet';
import Header from '../components/Header';
import SignUp from '../components/SignUp';


function SignUpPage() {
    return (
        <>
            <MediaDiv>
                <Header/>
                <Main>
                    <SignUp/>
                </Main>
            </MediaDiv>
        </>
    )
}

export default SignUpPage