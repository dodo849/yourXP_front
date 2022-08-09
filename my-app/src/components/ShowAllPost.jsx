import React from 'react'
import {
    PostSection,
    PostTitleDiv,
    ProfileDiv,
    ProfilePic,
    Profile,
    MoreButton,
    PostContentDiv,
    PostContent,
    PostImgDiv,
    PostImg,
    PostReact,
    BuyPreDiv,
    PostTag,
    HeartDiv,
    ListHeart,
    GreenButton,
} from '../css/styledComponenet';
import ProfileImg from '../img/profile1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import PostImg1 from '../img/la.jpg';
import PostImg2 from '../img/la2.jpg';

function ShowAllPost() {

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
                    <MoreButton>
                        <FontAwesomeIcon icon={faEllipsisVertical} size='2x' color='#BFBFBF'/>
                    </MoreButton>
                </ProfileDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostImgDiv>
                    <PostImg>
                        <img src={PostImg1} />
                    </PostImg>
                    <PostImg>
                        <img src={PostImg2} />
                    </PostImg>
                </PostImgDiv>
                <PostContent>
                    LA에 있을 때 사진들 몇 개 보여드립니다.<br/>
                    제 경험담 재밌게 잘 들으셨나요? 이 글이 보시는 모든 분들께 도움이 되셨으면 좋겠습니다:)
                </PostContent>
                <HeartDiv>
                    <ListHeart>
                        <FontAwesomeIcon icon={faHeart} color='#439F68'/>
                        <p>50</p>
                    </ListHeart>
                </HeartDiv>
                <PostReact>
                    <BuyPreDiv>
                        <PostTag>#LA</PostTag>
                        <PostTag>#경험</PostTag>
                    </BuyPreDiv>
                    <GreenButton>채팅하기</GreenButton>
                </PostReact>
            </PostContentDiv>
        </PostSection>
    )
}

export default ShowAllPost