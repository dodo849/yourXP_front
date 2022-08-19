import styled, { keyframes } from "styled-components";

export const Img = styled.div`
  width: 260px;
  height: 150px;
  background-color: #F5F5F5;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 260px;
    height: 150px;
    overflow: hidden;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-top: 10px;
  text-overflow: ellipsis;
  width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Tag = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #439f68;
  margin-top: 5px;
`;

export const RankNumber = styled.button`
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #439f68;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 0px solid white;
  font-size: 16px;
`;

export const ShowDetail = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #767676;
  display: flex;
  align-tiems: center;
  p {
    margin: 0;
  }
  img {
    position: relative;
    top: 4px;
    left: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;
