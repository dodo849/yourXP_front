import React from "react";
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

function MainPage() {
  let rakingContent = [
    {
      title: "제가 LA에 있었을 때 일입니다..",
      tag: "#LA #경험",
    },
    {
      title: "21살, 산티아고 순례길 완주 성공기",
      tag: "#여행 #순례길",
    },
    {
      title: "구글 본사 10년 근무 노하우 전부..",
      tag: "#IT #직장",
    },
  ];

  return (
    <>
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
          <ContentTitle>이번달 랭킹 Top 10</ContentTitle>
          <ContentDescription>
            이번달 가장 핫한 경험을 구경해보세요
          </ContentDescription>
        </ContentIntro>
        <RankingCards>
          {rakingContent.map((item) => (
            <RankingCard title={item.title} tag={item.tag}></RankingCard>
          ))}
        </RankingCards>
      </RankingContent>

      <RankingContent>
        <ContentIntro>
          <ContentTitle>지금 참여해주세요</ContentTitle>
        </ContentIntro>
        <ButtonRowGroup>
          <FillButton>경험 들려주기</FillButton>
          <LightButton>경험 물어보기</LightButton>
        </ButtonRowGroup>
      </RankingContent>


    </>
  );
}

export default MainPage;
