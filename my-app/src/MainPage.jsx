import React from "react";
import {
  Banner,
  BannerContent,
  BannerTitleText,
  BannerTitleTextGreen,
  BannerTitle,
  BannerBodyText,
  BannerInput,
  BannerButton,
} from "./mainPageStyledComponent";
import ProfileImg from "./img/profile1.jpg";

function MainPage() {
  return (
    <>
    <Banner>
      <BannerContent>
        <BannerTitle>
          <BannerTitleText>당신의</BannerTitleText>
          <BannerTitleTextGreen>경험</BannerTitleTextGreen>
          <BannerTitleText>을 삽니다</BannerTitleText>
        </BannerTitle>
        <BannerBodyText>
          어떤 경험을 하셨나요? 당신만의 특별한 경험을 들려주세요
        </BannerBodyText>
        <BannerInput placeholder="여기에 당신의 경험을 써주세요"></BannerInput>
        <BannerButton>경험 올리기</BannerButton>
      </BannerContent>
    </Banner>
    </>
  );
}

export default MainPage;
