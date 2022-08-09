import React from 'react'
import { 
  GreenButton,
  ReviewSection,
  ReviewTitle,
  ReviewBox,
  ReviewContent,
  ReviewInfo2,
  ReviewStar,
  } from './styledComponenet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function WriteReview() {
  return (
    <ReviewSection>
      <ReviewTitle>후기 작성</ReviewTitle>
      <ReviewBox>
          <input type="text" placeholder='들은 경험에 대한 후기를 남겨주세요!' />
          <ReviewInfo2>
              <ReviewStar>
                  <FontAwesomeIcon icon={faStar} size='2x' color='#BADC34'/>
                  <FontAwesomeIcon icon={faStar} size='2x' color='#BADC34'/>
                  <FontAwesomeIcon icon={faStar} size='2x' color='#BADC34'/>
                  <FontAwesomeIcon icon={faStar} size='2x' color='#BADC34'/>
                  <FontAwesomeIcon icon={faStar} size='2x' color='#BADC34'/>
              </ReviewStar>
              <GreenButton>후기 작성하기</GreenButton>
          </ReviewInfo2>
      </ReviewBox>
    </ReviewSection>
  )
}

export default WriteReview