import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css';

function SignUp() {
  const navigate = useNavigate(); // 페이지 이동용 함수

  //input값 저장

  const reqSignup = () => {
    // request body에 데이터 담기
    let body = {
      username: document.getElementById('id').value,
      password: document.getElementById('pwd').value,
      real_name: document.getElementById('id').value,
      email: document.getElementById('email').value,
      nickname: document.getElementById('nickname').value,
    };
    console.log(body);
    fetch('https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/user/signup',
    {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body) //json으로 변환
    }
    ).then (async(data) => {
      // json을 response에 넣는다.
      let response = await data.json();
      alert('회원가입이 완료되었습니다!');
    });  
  };

  return (
    <>
      <div className="register">
        <div className="SignUpTitle">
          <h2>기본 정보 입력</h2></div>

        <form>
          <div className="flex">
            <ul className="container">
              <li className="item center">
                ID
              </li>
              <li className="item">
                <input id='id' type="text" placeholder="ID"/>
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                비밀번호
              </li>
              <li className="item">
                <input id='pwd' type="password" placeholder="비밀번호" required/>
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                비밀번호 확인
              </li>
              <li className="item">
                <input id='pwd2' type="password" placeholder="비밀번호 확인" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                이메일
              </li>
              <li className="item">
                <input id='email' type="email" placeholder="이메일" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                별명
              </li>
              <li className="item">
                <input id='nickname' type="text" placeholder="별명" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">

              </li>
              <li className="item">
                <button className="button" onClick={reqSignup}>가입완료</button>
              </li>

            </ul>

          </div>
        </form>



      </div>

    </>


  )
}
export default SignUp;