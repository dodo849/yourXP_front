import React, { useState } from "react";
import Header from "../components/Header";
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
  WriteCompleteButton,
} from "../css/StyledComponent2";

function WritePost() {

    const [imgName, setImgName] = useState("이미지 없음");

    console.log(imgName);
  return (
    <>
      <Header></Header>
      <WriteSection>
        <WriteTitle>
          <h3>경험 들려주기</h3>
        </WriteTitle>
        <WriteSubTitle>
          어떤 경험을 하셨나요? 당신만의 특별한 경험을 들려주세요.
        </WriteSubTitle>

        <WriteName>제목</WriteName>
        <WriteNameBox>
          <input
            type="text"
            placeholder="어떤 경험을 하셨나요? 당신의 경험을 들려주세요."
          />
        </WriteNameBox>

        <WriteContent>본문</WriteContent>
        <WriteContentBox>
          <textarea placeholder="여기에 당신의 이야기를 써주세요." />
        </WriteContentBox>

        {/* <WriteAttachment>첨부자료</WriteAttachment> */}

        <WriteAttachmentalign>
          <WriteAttachmentBox>
            <div>
            <p
            >{imgName}</p>
            </div>
            <label htmlFor="file">+ 이미지</label>
            <input
              hidden
              type="file"
              id="file"
              name="file"
              accept="image/gif, image/jpeg, image/jpg, image/png"
              onChange={(e) => {
                (setImgName(e.target.files[0].name));
              }
            }
            />
          </WriteAttachmentBox>
        </WriteAttachmentalign>

        <WritePrice>가격</WritePrice>
        <WritePriceBox>
          <input type="text" />
        </WritePriceBox>

        <WriteCompleteButton>
          <button
            id="Button"
            style={{ backgroundColor: "#439F68" }}
            onClick={() => console.log("완료하기 클릭")}
          >
            완료하기
          </button>
        </WriteCompleteButton>
      </WriteSection>
    </>
  );
}

export default WritePost;
