import React, { startTransition, useState } from 'react'
import { 
  ReviewSection,
  ReviewTitle,
  ReviewBox,
  Reviewinput,
  ReviewInfo2,
  ReviewStar,
  } from '../css/PostStyle';
import { GreenButton } from "../css/styledComponenet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    yellowgreen:"#BADC34",
    gray:"#E0E0E0",
};

function WriteReview() {
  const stars = Array(5).fill(0);
  const [ currentValue, setCurrentValue] = useState(0);
  const [ hoverValue, setHoverValue ] = useState(null);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  }

  return (
    <ReviewSection>
      <ReviewTitle>후기 작성</ReviewTitle>
      <ReviewBox>
          <Reviewinput placeholder='들은 경험에 대한 후기를 남겨주세요!' />
          <ReviewInfo2>
              <ReviewStar>
                    {stars.map((_, index) => {
                      return (
                        <FontAwesomeIcon 
                          icon = {faStar}
                          key={index}
                          size='2x'
                          flip='horizontal'
                          style={{cursor: "pointer"}}
                          color={(hoverValue || currentValue) > index ? colors.yellowgreen : colors.gray}
                          onClick={()=>handleClick(index+1)}
                          onMouseOver={()=>handleMouseOver(index+1)}
                          onMouseLeave={()=>handleMouseLeave}
                        />
                    )
                  })}
              </ReviewStar>
              <GreenButton onClick={() => {alert("준비중입니다");}}>후기 작성하기</GreenButton>
          </ReviewInfo2>
      </ReviewBox>
    </ReviewSection>
  )
}

export default WriteReview