import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  Tag,
  Img,
  RankNumber,
  ShowDetail,
} from "../css/rankingCardStyle";
import ArrowRight from "../img/icon/arrow-right.svg";

function RankingCard({
  id,
  title,
  tag1,
  tag2,
  tag3,
  rankNumber,
  imgName,
  isApiSuccess,
}) {
  // 화면 전환
  const navigate = useNavigate();

  const goSellPostDetail = (id) => {
    navigate(`/selllist/${id}`);
    console.log(imgName);
  };

  return (
    <div>
      <RankNumber>{rankNumber}위</RankNumber>
      <Img>
        {isApiSuccess ? (
          <img
            src={`https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app${imgName}`}
            alt="post image"
          />
        ) : (
          <img src={require(`../img/${imgName}`)} alt="post image" />
        )}
      </Img>
      <Title>{title}</Title>
      <Tag>
        #{tag1} #{tag2} #{tag3}
      </Tag>
      <ShowDetail onClick={() => goSellPostDetail(id)}>
        <p>자세히보기</p>
        <img src={ArrowRight} alt="화살표" width="15px" height="15px" />
      </ShowDetail>
    </div>
  );
}

export default RankingCard;
