import React from 'react'
import {
    PostListDiv,
    PostSearchDiv,
    PostSearch,
    Button,
    WhiteButton,
    GreenButton,
    ListDiv,
    ListInfo,
    ListImg,
    ListTitle,
    ListSummary,
    ListTag,
    ListCheck,
    ListText,
    ListInfo2,
    ListHeart,
    ListPrice,
    MoreDiv,
    GrayButton,
    } from './styledComponenet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import PostTitleImg1 from './img/la.jpg';
import PostTitleImg2 from './img/santiago.jpg';
import PostTitleImg3 from './img/google.jpg';

function PostList() {
    return (
        <PostListDiv>
            <PostSearchDiv>
                <PostSearch>
                    <input type="text" placeholder='검색어를 입력해주세요.' />
                    <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68'/>
                </PostSearch>
            </PostSearchDiv>
            <Button>
                <WhiteButton>추천순</WhiteButton>
                <GreenButton>글쓰기</GreenButton>
            </Button>
            <hr/>
            <ListDiv>
                <ListInfo>
                    <ListImg>
                        <img src= { PostTitleImg1 }/>
                    </ListImg>
                    <ListText>
                        <ListTitle>제가LA에 있었을 때 일입니다..</ListTitle>
                        <ListSummary>제가 LA에 있었을 때 일입니다.. 한국에서 일을 하고 있었던 저는</ListSummary>
                        <ListTag>#LA #경험</ListTag>
                        <ListCheck>
                            <h6> 
                                <FontAwesomeIcon icon={faEye} size='sm'color='#767676'/>&nbsp;95
                                &nbsp;&nbsp;2022.07.01 
                            </h6>
                        </ListCheck>
                    </ListText>
                </ListInfo>
                <ListInfo2>
                    <ListHeart>
                        <FontAwesomeIcon icon={faHeart} color='#439F68'/>
                        <hr/>
                        <p>50</p>
                    </ListHeart>
                    <ListPrice>
                        <p>Point</p>
                        <span>7,000</span>
                    </ListPrice>
                </ListInfo2>
            </ListDiv>
            <hr/>

            <ListDiv>
                <ListInfo>
                    <ListImg>
                        <img src={PostTitleImg2}/>
                    </ListImg>
                    <ListText>
                        <ListTitle>21살, 산티아고 순례길 완주 성공기</ListTitle>
                        <ListSummary>어린 나이 21살, 막 성인임을 느끼고 있던 차에 더 재밌는 경험을 해..</ListSummary>
                        <ListTag>#여행 #순례길 #산티아고</ListTag>
                        <ListCheck>
                            <h6>
                                <FontAwesomeIcon icon={faEye} size='sm'color='#767676'/>&nbsp;50
                                &nbsp;&nbsp;2022.07.25
                            </h6>
                        </ListCheck>
                    </ListText>

                </ListInfo>
                <ListInfo2>
                    <ListHeart>
                        <FontAwesomeIcon icon={faHeart} color='#439F68'/>
                        <hr/>
                        <p>35</p>
                    </ListHeart>
                    <ListPrice>
                        <p>Point</p>
                        <span>80,000</span>
                    </ListPrice>
                </ListInfo2>
                </ListDiv>
            <hr/>
            <ListDiv>
                <ListInfo>
                    <ListImg>
                        <img src={PostTitleImg3}/>
                    </ListImg>
                    <ListText>
                        <ListTitle>구글 본사 10년 근무 노하우 전부 알려드립니다.</ListTitle>
                        <ListSummary>저는 2012년도에 구글 본사에 입사했습니다. 처음엔 이게 현실인...</ListSummary>
                        <ListTag>#IT #직장</ListTag>
                        <ListCheck>
                            <h6>
                                <FontAwesomeIcon icon={faEye} size='sm'color='#767676'/>&nbsp;72
                                &nbsp;&nbsp;2022.08.01
                            </h6>
                        </ListCheck>
                    </ListText>
                </ListInfo>
                <ListInfo2>
                    <ListHeart>
                        <FontAwesomeIcon icon={faHeart} color='#439F68'/>
                        <hr/>
                        <p>29</p>
                    </ListHeart>
                    <ListPrice>
                        <p>Point</p>
                        <span>200,000</span>
                    </ListPrice>
                </ListInfo2>
            </ListDiv>
            <hr/>
            <MoreDiv>
                <GrayButton>더보기</GrayButton>
            </MoreDiv>
        </PostListDiv>
    )
}

export default PostList