import React from 'react'

import {
    PostListDiv,
    PostSearchDiv,
    PostSearch,
    Button,
    GreenButton,
    MoreDiv,
    GrayButton,
    } from '../css/styledComponenet';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import ListCardB from './ListCardB';

function PostListB() {
    let buyList = [
        {            
            title: "교환 학생 갔다오신 분 알려주세요",
            summary: "다음학기 교환 학생 가려고 하는데 혹시 미국으로 다녀오신 분 있으면 연락주세요.",
            tag: "#여행 #교환학생 #미국",
            view: "95", 
            date: "2시간 전",
            price: "7,000",
            deadline: "2022.08.15",

        },
        {
            title: "울릉도 어떻게 갈 수 있나요",
            summary: "울릉도를 꼭 가보고 싶은데 여행하기 좋은 날짜랑 가는 방법 알려 주세요.",
            tag: "#여행 #국내여행 #울릉도",
            view: "10", 
            date: "2022.07.11",
            price: "협의 가능",
            deadline: "2022.08.11",
        },
        {
            title: "유럽 여행 계획",
            summary: "유럽 여행 루트를 짜봤는데 계획대로 가능한지 봐주세요",
            tag: "#여행 #해외여행 #여행계획",
            view: "50", 
            date: "2022.08.15",
            price: "무료",
            deadline: "2022.08.30",
        },
        {
            title: "산티아고 여행질문",
            summary: "준비물, 항공권, 여행지 등등 이것저것 질문하려고 하는데 갔다오신 분 있으면 연락주세요",
            tag: "#여행 #해외여행 #질문 #산티아고",
            view: "90", 
            date: "2022.06.01",
            price: "32,000,000",
            deadline: "2022.07.16",
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
                <GreenButton>글쓰기</GreenButton>
            </Button>
            <hr/>
            {buyList.map((item) => (
                <ListCardB title={item.title} summary={item.summary} tag={item.tag} view={item.view} date={item.date} price={item.price} deadline={item.deadline}></ListCardB>
            ))}
            <MoreDiv>
                <GrayButton>더보기</GrayButton>
            </MoreDiv>
        </PostListDiv>
    )
}

export default PostListB