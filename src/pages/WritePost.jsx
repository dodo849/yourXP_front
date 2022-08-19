import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const [uploadImg, setUploadImg] = useState();

  const reqWritePost = () => {

    const userName = window.sessionStorage.getItem("username");
    console.log(uploadImg)

    // request body에 데이터 담기
    let body = {
      images: [
          {
              image: btoa(uploadImg)
          }
      ],
      title: document.querySelector(".title"),
      text: document.querySelector(".body"),
      price: document.querySelector(".price"),
      user: userName,
      tag1: null,
      tag2: null,
      tag3: null,
      tag4: null,
      tag5: null,
      tag6: null,
      tag7: null,
      tag8: null,
      tag9: null,
      tag10: null
    };

    fetch("https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body), //json으로 변환
    }).then(async (data) => {
      // json을 response에 넣는다.
      let response = await data.json();
      console.log(response);

      navigate("/"); // 홈으로 이동
    });
    
  };

  //api





  const navigate = useNavigate();

  const [imgName, setImgName] = useState("이미지 없음");

  console.log(imgName);

  const isLogin = () => {

    const userName = window.sessionStorage.getItem("username");
    if (userName == null) {
      alert("글을 작성하려면 로그인을 먼저 해주세요 :)");
      navigate("/login");
      console.log(userName)
    }
  };

  // 컴포넌트 로딩시 최초 1회 
  useEffect(() => {
    isLogin();
  }, []);


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
            id="title"
            type="text"
            placeholder="어떤 경험을 하셨나요? 당신의 경험을 들려주세요."
          />
        </WriteNameBox>

        <WriteContent>본문</WriteContent>
        <WriteContentBox>
          <textarea id="body" placeholder="여기에 당신의 이야기를 써주세요." />
        </WriteContentBox>

        {/* <WriteAttachment>첨부자료</WriteAttachment> */}

        <WriteAttachmentalign>
          <WriteAttachmentBox>
            <div>
              <p>{imgName}</p>
            </div>
            <label htmlFor="file">+ 이미지</label>
            <input
              hidden
              type="file"
              id="file"
              name="file"
              accept="image/gif, image/jpeg, image/jpg, image/png"
              onChange={(e) => {
                setImgName(e.target.files[0].name);
                setUploadImg(e.target.files[0]);
              }}
            />
          </WriteAttachmentBox>
        </WriteAttachmentalign>

        <WritePrice>가격</WritePrice>
        <WritePriceBox>
          <input type="text" id="price" />
          <p style={{ color: "#767676" }}>원</p>
        </WritePriceBox>

        <WriteCompleteButton>
          <button
            id="Button"
            style={{ backgroundColor: "#439F68" }}
            onClick={reqWritePost}
          >
            완료하기
          </button>
        </WriteCompleteButton>
      </WriteSection>
    </>
  );
}

export default WritePost;
