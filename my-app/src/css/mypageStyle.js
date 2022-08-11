import styled, { keyframes } from "styled-components";

export const MyPageTitle = styled.div`
  width: 1024px;
  margin: 50px auto 50px auto;
  padding: 10px;

  h1 {
    display: inline-block;
    border-bottom: 5px solid #439f68;
    padding-bottom: 10px;
  }
`;

// layout
export const MyPageContainer = styled.div`
  width: 1024px;
  margin: 50px auto 300px auto;
  display: flex;
  gap: 40px;
`;

export const LeftContainer = styled.div`
  width: 40%;
`;

export const RightContainer = styled.div`
  width: 60%;
`;

// profile (left section)
export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  margin auto;
  border-radius: 10px;
  background-color: gray;
`;

export const ProfileInfo = styled.div`
  height: 50px;
  display: flex;
  padding: 0 30px;
  background: #f9f9f9;
  border-radius: 10px;
  align-items: center;
  gap: 20px;
  margin-top: 25px;

  h5 {
    font-size: 16px;
    font-weight: 500;
    color: #767676;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin: 0;
  }
`;

// right section

export const BottomBorderContainer = styled.div`
  border-bottom: 1px solid #dcdcdc;
  padding: 15px 20px;

  p {
    font-weight: 500;
    font-size: 16px;
    color: #000000;
  }

  button {
    font-weight: 500;
    font-size: 14px;
    color: #439f68;
    border: 0px solid white;
    background-color: white;
  }
`;

export const ListTitle = styled.div`
display: flex;
justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostListItem = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #767676;
  }
`;

// button
export const Button = styled.button`
width: 100%;
  font-family: "Noto Sans KR";
  margin-top: 25px;
  display: block;
  border-radius: 10px;
  color: white;
  padding: 15px 20px;
  border: 0px solid #439f68;
  font-size: 16px;
  font-weight: 500;
  background: rgba(67, 159, 104, 0.6);

  &:hover {
    background: rgba(67, 159, 104, 1);
    cursor: pointer;
  }
`;