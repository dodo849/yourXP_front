import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
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
import { GreenButton, MoreModalDiv } from '../css/styledComponenet';

import Moremodal from '../components/MoreModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function WonderPost({buypost}) {
    const [modal, setModal] = useState(false);


    return (
        <PostSection>
            <PostTitleDiv>
                <h2>{buypost.title}</h2>
                <ProfileDiv>
                    <ProfilePic/>
                    <Profile>
                        <p>{buypost.user}</p>
                        <h6>{buypost.create_time} · 조회 {buypost.hits}</h6>
                    </Profile>

                    <MoreButton>
                        <FontAwesomeIcon 
                            icon={faEllipsisVertical} 
                            size='2x'
                            color='#BFBFBF'
                            style={{cursor:'pointer'}}
                            onClick={() => { setModal(!modal)}}
                        />
                        {modal === true ? <MoreModalDiv><Moremodal/></MoreModalDiv> : null}
                    </MoreButton>
                </ProfileDiv>
                <PointDiv>
                    <Point>Point</Point>
                    <PointPrice>{buypost.price}</PointPrice>
                    <Point>마감</Point>
                    <PointPrice>{buypost.deadline}</PointPrice>
                </PointDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostContent>{buypost.text}</PostContent>
                <PostReact>
                    <BuyPreDiv>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{buypost.tag1}</PostTag>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{buypost.tag2}</PostTag>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{buypost.tag3}</PostTag>
                    </BuyPreDiv>
                    <GreenButton><Link to="/chat">채팅하기</Link></GreenButton>
                </PostReact>
            </PostContentDiv>
        </PostSection>
    )
}

export default WonderPost