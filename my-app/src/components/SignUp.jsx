import React from "react";
import './css/SignUp.css';

function SignUp() {
  return (
    <body>
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
                <input type="text" placeholder="ID" />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                비밀번호
              </li>
              <li className="item">
                <input type="password" placeholder="비밀번호" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                비밀번호 확인
              </li>
              <li className="item">
                <input type="password" placeholder="비밀번호 확인" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                이메일
              </li>
              <li className="item">
                <input type="email" placeholder="이메일" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">
                별명
              </li>
              <li className="item">
                <input type="text" placeholder="별명" required />
              </li>
            </ul>
            <ul className="container">
              <li className="item center">

              </li>
              <li className="item">
                <button className="button" onClick={() =>alert("가입이 완료되었습니다.")}>가입완료</button>
              </li>

            </ul>

          </div>
        </form>



      </div>

    </body>


  )
}
export default SignUp;