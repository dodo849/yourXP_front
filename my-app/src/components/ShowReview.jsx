import React from 'react'
import {
    ReviewSection,
    ReviewTitle,
    ReviewBox,
    ReviewContent,
    ReviewInfo,
    Reviewer,
    ReviewGrade,
    ReviewStar,
} from '../css/styledComponenet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

function ShowReview() {
    return (
        <ReviewSection>
            <ReviewTitle>구매 후기</ReviewTitle>
            <ReviewBox>
                <ReviewContent> 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 대통령은근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국가는 과학기술의 혁신</ReviewContent>
                <ReviewInfo>
                    <Reviewer>작성자 abcdef님</Reviewer>
                    <ReviewGrade>4.5</ReviewGrade>
                    <ReviewStar>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStarHalf} size='lg' color='#BADC34'/>
                    </ReviewStar>
                </ReviewInfo>
            </ReviewBox>
            <ReviewBox>
                <ReviewContent> 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 대통령은근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국가는 과학기술의 혁신</ReviewContent>
                <ReviewInfo>
                    <Reviewer>작성자 abcdef님</Reviewer>
                    <ReviewGrade>3.5</ReviewGrade>
                    <ReviewStar>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStarHalf} size='lg' color='#BADC34'/>
                    </ReviewStar>
                </ReviewInfo>
            </ReviewBox>
        </ReviewSection>
    )
}

export default ShowReview