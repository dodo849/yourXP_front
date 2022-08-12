import React from 'react'
import {
    PostListDiv,
    PostSearchDiv,
    PostSearch,
    Button,
    WhiteButton,
    GreenButton,
    MoreDiv,
    GrayButton,
    } from '../css/styledComponenet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import ListCardS from './ListCardS';

function PostList() {
    let sellList = [
        {
            title: "제가 LA에 있었을 때 일입니다..",
            summary: "제가 LA에 있었을 때 일입니다.. 한국에서 일을 하고 있었던 저는",
            tag: "#LA #경험",
            view: "95", 
            date: "2022.07.01",
            heart: "50",
            price: "7,000"
        },
        {
            title: "21살, 산티아고 순례길 완주 성공기",
            summary: "어린 나이 21살, 막 성인임을 느끼고 있던 차에 더 재밌는 경험을 해..",
            tag: "#여행 #순례길 #산티아고",
            view: "50", 
            date: "2022.07.25",
            heart: "35",
            price: "80,000"
        },
        {
            title: "구글 본사 10년 근무 노하우 전부..",
            summary: "저는 2012년도에 구글 본사에 입사했습니다. 처음엔 이게 현실인...",
            tag: "#IT #직장",
            view: "72", 
            date: "2022.08.01",
            heart: "29",
            price: "200,000"
        },
    ];

    return (
        <PostListDiv>
            <PostSearchDiv>
                <PostSearch>
                    <input type="text" placeholder='검색어를 입력해주세요.' />
                    <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68' cursor='pointer'/>
                </PostSearch>
            </PostSearchDiv>
            <Button>
                <WhiteButton>추천순</WhiteButton>
                <GreenButton>글쓰기</GreenButton>
            </Button>
            <hr/>
            {sellList.map((item) => (
                <ListCardS title={item.title} summary={item.summary} tag={item.tag} view={item.view} date={item.date} heart={item.heart} price={item.price}></ListCardS>
            ))}
            <MoreDiv>
                <GrayButton>더보기</GrayButton>
            </MoreDiv>
        </PostListDiv>
    )
}

export default PostList