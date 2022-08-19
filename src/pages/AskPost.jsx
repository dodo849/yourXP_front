import React from 'react';
import {
    AskSection,
    AskTitle,
    AskSubTitle,
    AskName,
    AskNameBox,
    AskContent,
    AskContentBox,
    AskCompleteButton
} from '../css/StyledComponent';

function AskPost() {
    return(
        <AskSection>

            <AskTitle><h3>경험 물어보기</h3></AskTitle>
            <AskSubTitle>어떤 경험이 궁금하신가요? 무엇이든 물어보세요</AskSubTitle>

            <AskName>제목</AskName>
            <AskNameBox>
                <input type="text" placeholder="어떤 경험을 하셨나요? 당신의 경험을 들려주세요" />
            </AskNameBox>

            <AskContent>본문</AskContent>
            <AskContentBox>
                <input type="text" placeholder="여기에 당신의 이야기를 써주세요" />
                const AskAttachPhoteButton = <button id="Button"
                style={{backgroundColor: "",}}
                onClick={()=>console.log("이미지 추가하기 클릭")}>이미지 추가하기 +</button>
            </AskContentBox>


            <AskCompleteButton>
            const AskCompleteButton = <button id="Button"
                    style={{backgroundColor: "#439F68",}}
                    onClick={()=>console.log("완료하기 클릭")}>완료하기</button>
            </AskCompleteButton>
        </AskSection>
    );

}

export default AskPost;