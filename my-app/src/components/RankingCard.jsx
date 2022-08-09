import { Title, Tag, Img } from "./rankingCardStyle";

function RankingCard({ title, tag }) {
  return (
    <div>
        <Img></Img>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
    </div>
  );
}

export default RankingCard;
