import React from 'react'
import {
    MediaDiv,
    Footer,
    Main,
} from '../styledComponenet';
import Header from '../Header_1';
import ShowAllPost from '../ShowAllPost';
import WriteReview from '../WriteReview';

function SellAllPost() {
    return (
        <>
            <MediaDiv>
                <Header/>
                <Main>
                    <ShowAllPost/>
                    <WriteReview/>
                </Main>
                <Footer>
                    <p>ⓒ멋쟁이사자처럼 10th at 경상국립대<br/>강경아 강지희 김민지 박재욱 박경훈 송채율 이도연 이재성</p>
                </Footer>
            </MediaDiv>
        </>
    )
}

export default SellAllPost