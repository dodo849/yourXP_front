import React from 'react'
import {
    PostSection,
    PostTitleDiv,
    ProfileDiv,
    ProfilePic,
    Profile,
    Point,
    PointPrice,
    MoreButton,
    PostContentDiv,
    PostContent,
    PostReact,
    BuyPreDiv,
    PostTag,
} from '../css/PostStyle';
import {PointDiv} from '../css/ListCardBStyle';
import { GreenButton } from '../css/styledComponenet';

import ProfileImg from '../img/profile1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function WonderPost() {
    return (
        <PostSection>
            <PostTitleDiv>
                <h2>교환 학생 갔다오신분 알려주세요</h2>
                <ProfileDiv>
                    <ProfilePic>
                        <img src={ProfileImg}/>
                    </ProfilePic>
                    <Profile>
                        <p>이재성</p>
                        <h6>2시간 전 · 조회 26</h6>
                    </Profile>

                    <MoreButton>
                        <FontAwesomeIcon icon={faEllipsisVertical} size='2x' color='#BFBFBF'/>
                    </MoreButton>
                </ProfileDiv>
                <PointDiv>
                    <Point>Point</Point>
                    <PointPrice>7,000</PointPrice>
                    <Point>마감</Point>
                    <PointPrice>2022.08.15</PointPrice>
                </PointDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostContent>
                    다음학기 교환 학생 가려고 하는데 <br/>
                    혹시 미국으로 다녀오신분 있으면 연락주세요. <br/>
                </PostContent>
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

export default WonderPost