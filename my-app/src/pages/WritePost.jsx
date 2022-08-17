import React from 'react';
import {
    WriteSection,
    WriteTitle,
    WriteSubTitle,
    WriteName,
    WriteNameBox,
    WriteContent,
    WriteContentBox,
    WriteAttachment,
    WriteAttachmentalign,
    WriteAttachmentBox,
    WriteAttachmentButton,
    WriteAttachmentSaveButton,
    WritePrice,
    WritePriceBox,
    WriteCompleteButton
} from './StyledComponent';

function WritePost() {
    return (
        <WriteSection>
            <WriteTitle><h3>경험 들려주기</h3></WriteTitle>
            <WriteSubTitle>어떤 경험을 하셨나요? 당신만의 특별한 경험을 들려주세요.</WriteSubTitle>

            <WriteName>제목</WriteName>
            <WriteNameBox>
                <input type="text" placeholder="어떤 경험을 하셨나요? 당신의 경험을 들려주세요." />
            </WriteNameBox>

            <WriteContent>본문</WriteContent>
            <WriteContentBox>
                <input type="text" placeholder="여기에 당신의 이야기를 써주세요." />
                const WriteAttachPhoteButton = <button id="Button"
                style={{backgroundColor: "",}}
                onClick={()=>console.log("이미지 추가하기 클릭")}>이미지 추가하기 +</button>
            </WriteContentBox>

            <WriteAttachment>첨부자료</WriteAttachment>

            <WriteAttachmentalign>
            <WriteAttachmentBox></WriteAttachmentBox>
            <WriteAttachmentButton>
                const WriteAttachmentButton = <button id="Button"
                style={{backgroundColor: "#D9ECE1",}}
                onClick={()=>console.log("첨부파일 찾기 클릭")}>찾아보기</button>
            </WriteAttachmentButton>

            <WriteAttachmentSaveButton>
                const WriteAttachmentSaveButton = <button id="Button"
                    style={{backgroundColor: "#439F68",}}
                    onClick={()=>console.log("첨부파일 저장 클릭")}>저장</button>
            </WriteAttachmentSaveButton>
            </WriteAttachmentalign>

            <WritePrice>가격</WritePrice>
            <WritePriceBox>
                <input type="text">포인트</input>
            </WritePriceBox>

            <WriteCompleteButton>
                const WriteCompleteButton = <button id="Button"
                    style={{backgroundColor: "#439F68",}}
                    onClick={()=>console.log("완료하기 클릭")}>완료하기</button>
            </WriteCompleteButton>
        </WriteSection>
    );

}

export default WritePost;