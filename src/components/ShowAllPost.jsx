import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
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
} from '../css/PostStyle';
import { GreenButton, MoreModalDiv } from '../css/styledComponenet';
import { Heart } from "../css/ListCardSStyle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Moremodal from '../components/MoreModal';
import ToggledHeart from '../components/ToggledHeart';

import PostImg1 from '../img/la.jpg';
import PostImg2 from '../img/la2.jpg';

function ShowAllPost({sellpost, userinfo}) {
    const [modal, setModal] = useState(false);
    const [isHeart, setIsHeart] = useState(true);

    return (
        <PostSection>
            <PostTitleDiv>
                <h2>{sellpost.title}</h2>
                <ProfileDiv>
                    <ProfilePic><img src={`https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app${userinfo.profile}`}/></ProfilePic> 
                    <Profile>
                        <p>{userinfo.nickname}</p>
                        <h6>{String(sellpost.create_time).slice(0,-17)} · 조회 {sellpost.hits} · 추천 {sellpost.recommend}</h6>
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

                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostImgDiv>
                    <PostImg><img src={`${sellpost.images[0].image}`}/></PostImg>
                </PostImgDiv>
                <PostContent>
                    {sellpost.text}
                </PostContent>
                <HeartDiv>
                    <Heart>
                        <ToggledHeart setIsHeart={setIsHeart}/>
                        <p>{sellpost.recommend}</p>
                    </Heart>
                </HeartDiv>
                <PostReact>
                    <BuyPreDiv>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{sellpost.tag1}</PostTag>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{sellpost.tag2}</PostTag>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#{sellpost.tag3}</PostTag>
                    </BuyPreDiv>
                    <GreenButton><Link to="/chat">채팅하기</Link></GreenButton>
                </PostReact>
            </PostContentDiv>
        </PostSection>
    )
}

export default ShowAllPost