import React from 'react'
import Header from "../components/Header";

import {
    MediaDiv,
    ListMain,
    GreenButton,
    } from '../css/styledComponenet';
import {
    MainPoint,
    NowPointDiv,
    NowPoint,
    PointBig,
    PointText,
    SearchPointDiv,
    CalenderSelectDiv,
    CalenderSelect,
    SearchPoint,
    ImgAndText,
    PointPrice,
    PointDiv,
    PointBox,
    PointUse,
    Date,
    Use,
    PointPost,
    PointMinus,
    PointPlus,
    RemainPoint,
} from '../css/PointStyle';

import PointImg from '../img/icon/point.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

function Point() {

    const MarginStyle = {
        margin: '0'
    }
    return (
        <MediaDiv>
            <Header/>
            <ListMain>
                <MainPoint>
                    <NowPointDiv>
                        <NowPoint>
                            <ImgAndText>
                                <img src={PointImg} width='35px' height='35px'/>
                                <PointBig>현재 포인트</PointBig>
                            </ImgAndText>
                            <PointPrice>
                                <PointText>3,200P</PointText>
                                <GreenButton style={MarginStyle}>포인트 충전</GreenButton>
                            </PointPrice>
                        </NowPoint>
                    </NowPointDiv>
                    <SearchPointDiv>
                        <CalenderSelectDiv>
                            <CalenderSelect><input type="date" /></CalenderSelect>
                            ~
                            <CalenderSelect><input type="date" /></CalenderSelect>
                        </CalenderSelectDiv>
                        <SearchPoint>
                            <input type="text" placeholder='검색어를 입력하세요.' />
                            <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68' cursor='pointer'/>
                        </SearchPoint>
                    </SearchPointDiv>
                    <PointDiv>
                        <PointBox>
                            <PointUse>
                                <Date>2022.03.26 19:24</Date>
                                <Use>포인트 사용</Use>
                            </PointUse>
                            <PointPost>
                                '호주워킹홀리데이 모든 것을 알려드립니다' 포인트 사용
                            </PointPost>
                            <PointMinus>-29,000P</PointMinus>
                            <RemainPoint>잔여 3,200P</RemainPoint>
                        </PointBox>
                        <hr/>
                        <PointBox>
                            <PointUse>
                                <Date>2022.02.28 11:48</Date>
                                <Use>포인트 사용</Use>
                            </PointUse>
                            <PointPost>
                                'NAVER 현직 디자이너의 웹디자인 노하우' 포인트 사용
                            </PointPost>
                            <PointMinus>-100,000P</PointMinus>
                            <RemainPoint>잔여 33,200P</RemainPoint>
                        </PointBox>
                        <hr/>
                        <PointBox>
                            <PointUse>
                                <Date>2022.02.28 11:24</Date>
                                <Use>포인트 충전</Use>
                            </PointUse>
                            <PointPost>
                                100,000포인트 충전
                            </PointPost>
                            <PointPlus>+100,000P</PointPlus>
                            <RemainPoint>잔여 133,200P</RemainPoint>
                        </PointBox>
                        <hr/>
                        <PointBox>
                            <PointUse>
                                <Date>2022.01.16 22:06</Date>
                                <Use>포인트 사용</Use>
                            </PointUse>
                            <PointPost>
                                '스타트업 디자이너의 역할' 포인트 사용
                            </PointPost>
                            <PointMinus>-35,000P</PointMinus>
                            <RemainPoint>잔여 33,200P</RemainPoint>
                        </PointBox>
                        <hr/>
                    </PointDiv>
                </MainPoint>
            </ListMain>
        </MediaDiv>
    )
}

export default Point