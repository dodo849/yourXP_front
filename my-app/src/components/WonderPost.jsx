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

function WonderPost() {
    const [modal, setModal] = useState(false);

    const [buyPost, setBuyPost] = useState([]);

    const getBuyPost = async () => {
        console.log("getSellPosts call");
        await fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/buyXP/buys/detail/2`,
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
            setBuyPost(response);
        });
    };

    useEffect(() => {
        getBuyPost();
    }, []);

    return (
        <PostSection>
            <PostTitleDiv>
                <h2>교환 학생 갔다오신분 알려주세요</h2>
                <ProfileDiv>
                    <ProfilePic/>
                    <Profile>
                        <p>{buyPost.user}</p>
                        <h6>{buyPost.create_time.slice(0,-17)} · 조회 {buyPost.hits}</h6>
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
                    <PointPrice>{buyPost.price}</PointPrice>
                    <Point>마감</Point>
                    <PointPrice>{buyPost.deadline.slice(0,-10)}</PointPrice>
                </PointDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostContent>{buyPost.text}</PostContent>
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

export default WonderPost