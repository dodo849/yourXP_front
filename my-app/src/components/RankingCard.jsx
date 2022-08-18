import { useNavigate } from "react-router-dom";
import { Title, Tag, Img, RankNumber, ShowDetail } from "../css/rankingCardStyle";
import ArrowRight from "../img/icon/arrow-right.svg";

function RankingCard({ id, title, tag, rankNumber, imgName }) {

  // 화면 전환
  const navigate = useNavigate();

  const goSellPostDetail = (id) => {
    // navigate(`/selllist/post/${id}`);
    navigate(`/selllist/post/1`);
  };


  return (
    <div>
      <RankNumber>{rankNumber}위</RankNumber>
        <Img>
        <img src={require(`../img/${imgName}`)} alt="post image" />
        </Img>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
      <ShowDetail onClick={()=>goSellPostDetail(id)}>
        <p>자세히보기</p>
        <img src={ArrowRight} alt="화살표" width="15px" height="15px"/>
      </ShowDetail>
    </div>
  );
}

export default RankingCard;
