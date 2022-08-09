import React from 'react'
import {
    PostSection,
    PostTitleDiv,
    ProfileDiv,
    ProfilePic,
    Profile,
    PointDiv,
    Point,
    PointPrice,
    PostContentDiv,
    PostContent,
    PostTag,
    PostBuyDiv,
    PostBuyInfo,
    PostBuy,
    BuyPre,
    BuyPreInfo,
    BuyPreNum,
    BuyPreDiv,
    GreenButton,
} from '../css/styledComponenet';
import ProfileImg from '../img/profile1.jpg';

function ShowPost() {
    return (
        <PostSection>
            <PostTitleDiv>
                <h2>제가 LA에 있었을 때 일입니다..</h2>
                <ProfileDiv>
                    <ProfilePic>
                        <img src={ProfileImg}/>
                    </ProfilePic>
                    <Profile>
                        <p>LA떠돌이</p>
                        <h6>2022.07.01 · 조회 95 · 추천 50</h6>
                    </Profile>
                </ProfileDiv>
                <PointDiv>
                    <Point>Point</Point>
                    <PointPrice>7,000</PointPrice>
                </PointDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostContent>
                    제가 LA에 있었을 때 일입니다.<br/>
                    한국에서 일을 하고 있던 저는 극심한 번아웃에 외국이라도 나가보자는 마음으로 무작정 LA <br/>
                    행을 결정하게 되었습니다.<br/>
                </PostContent>
                <PostTag>#LA</PostTag>
                <PostTag>#경험</PostTag>
                <hr/>
            </PostContentDiv>
            <PostBuyDiv>
                <PostBuyInfo>이어지는 내용이 궁금하신가요? 이 글을 구매하고 더 흥미로운 이야기를 들어보세요!</PostBuyInfo>
                <PostBuy>
                    <BuyPreDiv>
                        <BuyPre>
                            <BuyPreInfo>텍스트</BuyPreInfo>
                            <BuyPreNum>7,000자</BuyPreNum>
                            <p>공백제외</p>
                        </BuyPre>
                        <BuyPre>
                            <BuyPreInfo>이미지</BuyPreInfo>
                            <BuyPreNum>10장</BuyPreNum>
                        </BuyPre>
                    </BuyPreDiv>
                    <GreenButton>구매하기</GreenButton>
                </PostBuy>
            </PostBuyDiv>
        </PostSection>
    )
}

export default ShowPost