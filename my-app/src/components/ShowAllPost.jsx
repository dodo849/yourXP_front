import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

function ShowAllPost() {
    const [modal, setModal] = useState(false);
    const [isHeart, setIsHeart] = useState(true);

    const [sellPost, setSellPost] = useState([]);

    const getSellPost = async () => {
        console.log("getSellPosts call");
        await fetch(
        "https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP",
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
        }
        ).then(async (data) => {
            // json을 response에 넣는다.
            let response = await data.json();
            console.log(response);
            setSellPost(response);
        });
    };

    useEffect(() => {
        getSellPost();
    }, []);

    return (
        <PostSection>
            <PostTitleDiv>
                <h2>제가 LA에 있었을 때 일입니다..</h2>
                <ProfileDiv>
                    <ProfilePic/>
                    <Profile>
                        <p>LA떠돌이</p>
                        <h6>2022.07.01 · 조회 95 · 추천 50</h6>
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
                    <PostImg/>
                    <PostImg/>
                </PostImgDiv>
                <PostContent>
                    LA에 있을 때 사진들 몇 개 보여드립니다.<br/>
                    제 경험담 재밌게 잘 들으셨나요? 이 글이 보시는 모든 분들께 도움이 되셨으면 좋겠습니다:)
                </PostContent>
                <HeartDiv>
                    <Heart>
                        <ToggledHeart setIsHeart={setIsHeart}/>
                        <p>50</p>
                    </Heart>
                </HeartDiv>
                <PostReact>
                    <BuyPreDiv>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#LA</PostTag>
                        <PostTag onClick={() => {alert("준비중입니다");}}>#경험</PostTag>
                    </BuyPreDiv>
                    <GreenButton><Link to="/chat">채팅하기</Link></GreenButton>
                </PostReact>
            </PostContentDiv>
        </PostSection>
    )
}

export default ShowAllPost