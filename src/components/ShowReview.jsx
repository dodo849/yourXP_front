import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {
    ReviewSection,
    ReviewTitle,
    ReviewBox,
    ReviewContent,
    ReviewInfo,
    Reviewer,
    ReviewGrade,
    ReviewStar,
} from '../css/PostStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ShowReview() {
    const params = useParams();

    const [allreview, setAllReview] = useState(null);

    const getAllReview = () => {
        console.log("getAllReview call");
        fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/${params.postId}/reviews`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
        }
        ).then(async (data) => {
        // json을 response에 넣는다.
        let response = await data.json();
        console.log("==================res==");
        console.log(response);
        setAllReview(response);
        });
    };

    useEffect(() => {
        getAllReview();
    }, []);
    
    return (
        <ReviewSection>
            <ReviewTitle>구매 후기</ReviewTitle>
            <ReviewBox>
                <ReviewContent>{allreview != null && allreview[0].body}</ReviewContent>
                <ReviewInfo>
                    <Reviewer>작성자 abcdef님</Reviewer>
                    <ReviewGrade>{allreview != null && allreview[0].grad}</ReviewGrade>
                    <ReviewStar>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                        <FontAwesomeIcon icon={faStar} size='lg' color='#BADC34'/>
                    </ReviewStar>
                </ReviewInfo>
            </ReviewBox>
        </ReviewSection>
    )
}

export default ShowReview