import React, {useState} from 'react'
import {
    KategorieDiv,
    KategorieButton,
    BigTag,
    ListDiv,
    ListItem,
} from '../css/KategorieStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ToggledArrow from '../components/ToggledArrow';

//svg 파일 사용해야하는데 임시로 png파일 사용
import KateIcon1 from '../img/icon/license.png';
import KateIcon2 from '../img/icon/job.png';
import KateIcon3 from '../img/icon/fitness.png';
import KateIcon4 from '../img/icon/travel.png';
import KateIcon5 from '../img/icon/etc.png';

function Kategorie() {
    //서브카테고리
    const subLisense = [
        {title: "어학"},
        {title: "기사"},
        {title: "컴퓨터"},
        {title: "사회복지"},
        {title: "보건, 의료"},
        {title: "경영"},
        {title: "사무"}
    ];
    const subJob = [
        {title: "취업준비"},
        {title: "취업성공"}
    ];
    const subExercise = [
        {title: "헬스"},
        {title: "필라테스"},
        {title: "홈트레이닝"},
        {title: "기타 운동"},
    ];
    const subTrip = [
        {title: "국내여행"},
        {title: "해외여행"},
        {title: "교환학생"},
        {title: "워킹홀리데이"},
        {title: "유학"}
    ];
    //서브카테고리
    const [lisenseList, setLisenseList] = useState(subLisense);
    const [jobList, setJobList] = useState(subJob);
    const [exerciseList, setExerciseList] = useState(subExercise);
    const [tripList, setTripList] = useState(subTrip);
    //접기/펼치기
    const [isShowLisenseList, setIsShowLisenseList] = useState(false);
    const [isShowJobList, setIsShowJobList] = useState(false);
    const [isShowExerciseList, setIsShowExerciseList] = useState(false);
    const [isShowTripList, setIsShowTripList] = useState(false);
    const [isShowEtc, setIsShowEtc] = useState(false);
    
    return (
        <KategorieDiv>
            <KategorieButton>
                <ListDiv>
                    <img src={ KateIcon1 } width='22px' height='22px'/>
                    <BigTag>자격증</BigTag>
                    <ToggledArrow setIsShowContent={setIsShowLisenseList}/>
                </ListDiv>
                <ListItem>
                    {isShowLisenseList &&
                    subLisense.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </ListItem>
            </KategorieButton>
            <KategorieButton>
                <ListDiv>
                    <img src={ KateIcon2 } width='22px' height='22px'/>
                    <BigTag>취업</BigTag>
                    <ToggledArrow setIsShowContent={setIsShowJobList}/>
                </ListDiv>
                <ListItem>
                    {isShowJobList &&
                    subJob.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </ListItem>
            </KategorieButton>
            <KategorieButton>
                <ListDiv>
                    <img src={ KateIcon3 } width='22px' height='22px'/>
                    <BigTag>운동</BigTag>
                    <ToggledArrow setIsShowContent={setIsShowExerciseList}/>
                </ListDiv>
                <ListItem>
                    {isShowExerciseList &&
                    subExercise.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </ListItem>
            </KategorieButton>
            <KategorieButton>
                <ListDiv>
                    <img src={ KateIcon4 } width='22px' height='22px'/>
                    <BigTag>여행</BigTag>
                    <ToggledArrow setIsShowContent={setIsShowTripList}/>
                </ListDiv>
                <ListItem>
                    {isShowTripList &&
                    subTrip.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </ListItem>
            </KategorieButton>
            <KategorieButton>
                <ListDiv>
                    <img src={ KateIcon5 } width='22px' height='22px'/>
                    <BigTag>기타</BigTag>
                    <ToggledArrow setIsShowContent={setIsShowEtc}/>
                </ListDiv>
            </KategorieButton>
        </KategorieDiv>
    )
}

export default Kategorie;