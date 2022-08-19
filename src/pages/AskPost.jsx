import React from "react";
import Header from "../components/Header";
import {
  AskSection,
  AskTitle,
  AskSubTitle,
  AskName,
  AskNameBox,
  AskContent,
  AskContentBox,
  AskCompleteButton,
} from "../css/StyledComponent";

function AskPost() {
  return (
    <>
    <Header></Header>
    <body style={{ margin: "auto", width: "1024px" }}>
      <p
        className="AskTitle"
        style={{ fontStyle: "bold", fontSize: "32px", color: "#2B2B2B" }}
      >
        경험 물어보기
      </p>
      <p className="AskSubTitle" style={{ color: "#767676", fontSize: "16px" }}>
        어떤 경험이 궁금하신가요? 무엇이든 물어보세요.
      </p>
      <p className="AskName" style={{ color: "#767676", fontSize: "16px" }}>
        제목
      </p>
      <textarea
        className="AskNameBoxInput"
        placeholder="어떤 경험을 하셨나요? 당신의 경험을 들려주세요."
        style={{
          color: "#767676",
          border: "1px solid #BABABA",
          height: "57px",
          width: "1014px",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
        defaultValue={""}
      />
      <p
        className="AskContent"
        style={{ fontStyle: "bold", color: "#767676", fontSize: "16px" }}
      >
        본문
      </p>
      <textarea
        className="AskContentBoxInput"
        placeholder="여기에 당신의 이야기를 써주세요."
        style={{
          color: "#C6C6C6",
          border: "1px solid #439F68",
          height: "244px",
          width: "1014px",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
        defaultValue={""}
      />
      <button
        className="AskContentImageButton"
        type="button"
        style={{
          border: "1px solid #D9ECE1",
          fontSize: "16px",
          padding: "3px 5px",
          borderRadius: "5px",
        }}
      >
        이미지 추가하기 &gt;
      </button>
      <button
        className="AskCompleteButton"
        style={{
          border: "1px solid #439F68",
          borderRadius: "5px",
          height: "47px",
          width: "99px",
          fontSize: "16px",
          margin: "0 0 0 937px",
          color: "#FFFFFF",
          backgroundColor: "#439F68",
        }}
        onclick="/buylist"
      >
        완료하기
      </button>
    </body>
    </>
  );
}

export default AskPost;
