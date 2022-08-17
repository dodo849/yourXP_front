import React from "react";
import '../css/SignUpMain.css';

import Welcomelogo from '../img/welcome_logo.png';
import Simplelogo from '../img/mail_logo.png';
import Kakaologo from '../img/kakao_logo.png';
import Naverlogo from '../img/naver_logo.png';

function SignUpMain(){
    return(
        <body>

            <div className="SignUpMain">
            <div className="welcome">
                <img src={Welcomelogo} />
            </div>
    
            <div className="SignUpMainTitle">
                <h3>당신의 경험에 오신것을 환영합니다.</h3>
            </div>
            <div className="SignUpMainChoice">
                <h5>회원가입 방식을 선택해주세요</h5>
            </div>
    
            <div className="SignUpMainChoiceMenu">
                <div className="wrap">
                <button className='Simple_SignUp' >
                <span className='mailimg'><img src={Simplelogo} /></span>
                <span className='text1'>간편 회원가입</span>
                <span className='text'>인증없이 간편하게 회원가입</span>
                </button>
                </div>
    
                <div className="wrap">
                <button className='Kakao_SignUp' >
                <span className='kakaoimg'><img src={Kakaologo} /></span>
                <span className='text1'>카카오톡으로 회원가입</span>
                <span className='text'>카카오톡으로 인증하여 회원가입</span>
                </button>
                
                </div>
    
                <div className="wrap">
                <button className='Naver_SignUp' >
                <span className='naverimg'><img src={Naverlogo} /></span>
                <span className='text1'>네이버로 회원가입</span>
                <span className='text'>네이버로 인증하여 회원가입</span>
                </button>
                </div>
    
    
    
            </div>
            </div>
        </body>
    )
}

export default SignUpMain;