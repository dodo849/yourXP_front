import React, { useState, useEffect } from "react";
import {
  Banner,
  BannerContent,
  BannerTitleText,
  BannerTitleTextGreen,
  BannerTitle,
  BannerDescription,
  BannerInput,
  TranslucentButton,
  RankingContent,
  ContentIntro,
  ContentType,
  ContentTitle,
  ContentDescription,
  RankingCards,
  FillButton,
  LightButton,
  ButtonRowGroup,
} from "../css/mainPageStyle";
import RankingCard from "../components/RankingCard";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


function MainPage() {
  let dummyContent = [
    {
      id: 1,
      title: "제가 LA에 있었을 때 일입니다..",
      tag: "#LA #경험",
      imgName: "img_LA.png",
    },
    {
      id: 2,
      title: "21살, 산티아고 순례길 완주 성공기",
      tag: "#여행 #순례길",
      imgName: "img_santiago.png",
    },
    {
      id: 3,
      title: "구글 본사 10년 근무 노하우 전부..",
      tag: "#IT #직장",
      imgName: "img_google.png",
    },
  ];

  const [sellPosts, setSellPosts] = useState([]);
  const [sellPostTags, setSellPostTags] = useState([]);

  const getSellPosts = async () => {
    console.log("getSellPosts call");
    let response = await fetch(
      "https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/views",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    // json을 response에 넣는다.
    response = await response.json();
    console.log(response);

    // response.map((item) => getSellPostTags(item.id));

    setSellPosts(response);
  };

  const getSellPostTags = async (postId) => {
    console.log("getSellXPTags call");
    let response = await fetch(
      `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/tag/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    // json을 response에 넣는다.
    response = await response.json();
    setSellPostTags([...sellPostTags, response]);
    console.log(sellPostTags);
  };


  // 화면 전환
  const navigate = useNavigate();

  const goWritePost = () => {
    navigate("/writepost");
  };

  const goAskPost = () => {
    navigate("/askpost");
  };

  // 컴포넌트 로딩시 최초 1회 
  useEffect(() => {
    getSellPosts();
  }, []);

  return (
    <>
      <Header></Header>
      <Banner>
        <BannerContent>
          <BannerTitle>
            <BannerTitleText>당신의</BannerTitleText>
            <BannerTitleTextGreen>경험</BannerTitleTextGreen>
            <BannerTitleText>을 삽니다</BannerTitleText>
          </BannerTitle>
          <BannerDescription>
            어떤 경험을 하셨나요? 당신만의 특별한 경험을 들려주세요
          </BannerDescription>
          <BannerInput placeholder="여기에 당신의 경험을 써주세요"></BannerInput>
          <TranslucentButton>경험 올리기</TranslucentButton>
        </BannerContent>
      </Banner>

      <RankingContent>
        <ContentIntro>
          <ContentType>경험 둘러보기</ContentType>
          <ContentTitle>이번달 랭킹 Top 3</ContentTitle>
          <ContentDescription>
            이번달 가장 핫한 경험을 구경해보세요
          </ContentDescription>
        </ContentIntro>
        <RankingCards>
          {sellPosts.length == 0
            ? dummyContent.map((sellPost, index) => (
              index < 3 &&
                <RankingCard
                  key={index}
                  id={sellPost.id}
                  imgName={sellPost.imgName}
                  title={sellPost.title}
                  tag1={sellPost.tag}
                  rankNumber={index + 1}
                  isApiSuccess={false}
                ></RankingCard>
              ))
            : sellPosts.map((sellPost, index) => (
              index < 3 &&
                <RankingCard
                  key={sellPost.id}
                  id={sellPost.id}
                  imgName={sellPost.images[0].image}
                  title={sellPost.title}
                  tag1={sellPost.tag1}
                  tag2={sellPost.tag2}
                  tag3={sellPost.tag3}
                  rankNumber={index+1}
                  isApiSuccess={true}
                ></RankingCard>
              ))}
        </RankingCards>
      </RankingContent>

      <RankingContent>
        <ContentIntro>
          <ContentTitle>지금 참여해주세요!</ContentTitle>
        </ContentIntro>
        <ButtonRowGroup>
          <FillButton onClick={() => goWritePost()}>경험 들려주기</FillButton>
          <LightButton onClick={() => goAskPost()}>경험 물어보기</LightButton>
        </ButtonRowGroup>
      </RankingContent>
    </>
  );
}

export default MainPage;
