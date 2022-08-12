import styled, { keyframes } from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 700px;
  margin: calc(100vh - 700px) auto;
  border-radius: 10px;
  padding: 30px 0px;

  text-align: center;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  color: #439f68;
`;

export const Title = styled.div`
  margin: 20px auto;

  h1 {
    font-weight: 700;
    font-size: 36px;
    text-align: center;

    color: #439f68;
  }
`;

export const InputField = styled.div`
  margin: 20px auto;
  width: 60%;

  h3 {
    font-weight: 500;
    font-size: 18px;
    text-align: left;
    color: #000000;
    margin: 0;
  }

  input {
    width: 100%;
    height: 70px;
    color: #000000;
    background: #ffffff;
    border: 1px solid #BFBFBF;
    border-radius: 10px;
    padding: 0 20px;

    &:focus {
      outline: none; // 활성화 효과 빼기
      border: 1px solid rgba(67, 159, 104, 1);
      background-color: white;
    }

    &::-webkit-input-placeholder {
      color: #767676;
    }
  }
`;

// button
export const Button = styled.button`
  font-family: "Noto Sans KR";
  display: block;
  border-radius: 10px;
  color: white;
  padding: 15px 20px;
  border: 0px solid #439f68;
  font-weight: 500;
  font-size: 20px;
  background: rgba(67, 159, 104, 0.6);
  margin: 40px auto;

  &:hover {
    background: rgba(67, 159, 104, 1);
    cursor: pointer;
  }
`;
