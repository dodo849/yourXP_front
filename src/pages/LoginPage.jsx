import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import {
  ModalContainer,
  Title,
  InputField,
  Button,
} from "../css/loginModalStyle";

function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate(); // 페이지 이동용 함수

  const reqLogin = () => {
    // request body에 데이터 담기
    let body = {
      username: document.getElementById('id').value,
      password: document.getElementById('pwd').value,
    };

    fetch("https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body), //json으로 변환
    }).then(async (data) => {
      // json을 response에 넣는다.
      let response = await data.json();
      window.sessionStorage.setItem("username", response.username); // 브라우저 session에 저장
      navigate("/"); // 홈으로 이동
    }).catch((err)=>{
      console.log(err);
      alert("비밀번호가 틀렸거나 존재하지 않는 아이디입니다");
    });

  };

  return (
    <>
      <Header></Header>
      <ModalContainer>
        <Title>
          <h1>로그인</h1>
        </Title>
        <InputField>
          <h3>ID</h3>
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력해주세요"
          ></input>
        </InputField>
        <InputField>
          <h3>PW</h3>
          <input
            id="pwd"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          ></input>
        </InputField>
        <Button onClick={reqLogin}>로그인</Button>
      </ModalContainer>
    </>
  );
}

export default LoginPage;
