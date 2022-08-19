import {
  MyPageTitle,
  LeftContainer,
  MyPageContainer,
  RightContainer,
  ProfileImage,
  ProfileInfo,
  BottomBorderContainer,
  ButtonGroup,
  ListTitle,
  PostListItem,
  Button,
} from "../css/mypageStyle";
import ToggledArrow from "../components/ToggledArrow";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MyPage() {
  // dummy data
  const initMySellPost = [
    {
      title: "구글 본사 10년 근무 노하우 전부 알려드립니다.",
      date: "2022.07.28",
    },
    {
      title: "대만 여행지 추천!",
      date: "2022.07.30",
    },
  ];

  const initMyBuyPost = [
    {
      title: "쿠키런 잘하는 법",
      date: "2022.08.01",
    },
    {
      title: "오버워치 잘하는 법",
      date: "2022.08.05",
    },
  ];

  // state
  const [userInfo, setUserInfo] = useState({
    name: "김멋사",
    nick: "라이온킹",
    email: "lionking@likelion.org",
    pwd: "******",
    point: "10,000",
  });

  // 내가 산 경험 목록 데이터
  const [mySellPost, setMySellPost] = useState(initMySellPost);
  // 내가 산 경험 목록 접기/펼치기
  const [isShowMySellPost, setIsShowMySellPost] = useState(false);

  // 내가 판 경험 목록 데이터
  const [myBuyPost, setMyBuyPost] = useState(initMyBuyPost);
  // 내가 산 경험 목록 접기/펼치기
  const [isShowMyBuyPost, setIsShowMyBuyPost] = useState(false);


  const navigate = useNavigate();
  const goPoint = () => {
    navigate("/point");
  };

  return (
    <>
      {/* <LoginModal/> */}
      <MyPageTitle>
        <h1>마이페이지</h1>
      </MyPageTitle>
      <MyPageContainer>
        <LeftContainer>
          <ProfileImage></ProfileImage>
          <ProfileInfo>
            <h5>이름</h5>
            <p>{userInfo.name}</p>
          </ProfileInfo>
          <ProfileInfo>
            <h5>별명</h5>
            <p>{userInfo.nick}</p>
          </ProfileInfo>
          <ProfileInfo>
            <h5>이메일</h5>
            <p>{userInfo.email}</p>
          </ProfileInfo>
          <ProfileInfo>
            <h5>비밀번호</h5>
            <p>{userInfo.pwd}</p>
          </ProfileInfo>
          <Button>편집하기</Button>
        </LeftContainer>
        <RightContainer>
          <BottomBorderContainer>
            <ListTitle>
              <p>{userInfo.point}</p>
              <ButtonGroup>
                <button
                  onClick={() => {
                    alert("준비중입니다");
                  }}
                >
                  Point 충전하기
                </button>
                <button
                  onClick={goPoint}
                >
                  사용내역 보기
                </button>
              </ButtonGroup>
            </ListTitle>
          </BottomBorderContainer>
          <BottomBorderContainer>
            <ListTitle>
              <p>내가 판매한 경험</p>
              <ToggledArrow setIsShowContent={setIsShowMySellPost} />
            </ListTitle>
            {isShowMySellPost &&
              mySellPost.map((item) => (
                <PostListItem>
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </PostListItem>
              ))}
          </BottomBorderContainer>
          <BottomBorderContainer>
            <ListTitle>
              <p>내가 구매한 경험</p>
              <ToggledArrow setIsShowContent={setIsShowMyBuyPost} />
            </ListTitle>
            {isShowMyBuyPost &&
              myBuyPost.map((item) => (
                <PostListItem>
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </PostListItem>
              ))}
          </BottomBorderContainer>
        </RightContainer>
      </MyPageContainer>
    </>
  );
}

export default MyPage;
