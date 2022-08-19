import styled from "styled-components";

//경험 들려주기 글쓰기 기능
export const WriteSection = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  width: 960px;
`;

export const WriteTitle = styled.div`
  font-style: bold;
  color: #2b2b2b;

  h3 {
    font-size: 36px;
    margin-bottom: 10px;
  }
`;

export const WriteSubTitle = styled.div`
  color: #767676;
  margin-top: 10px;
  margin-bottom: 40px;
`;
//margin-top 숫자는 바꾸기(live server로 안 보여서 수정을 못 함)

export const WriteName = styled.div`
  color: #767676;
  margin-top: 15px;
`;
//margin-top 숫자 변경

export const WriteNameBox = styled.div`
  border-width: 1px;
  border-color: #bababa;
  border-radius: 10;
  backgroundcolor: #ffffff;
  display: flex;
  height: 77px;
  width: 1024px;
  margin-top: 8px;

  input {
    color: #2d2d2d;
    border: 1px solid ##bababa;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #439f68;
    padding: 10px 20px;
    width: 100%;

    &::-webkit-input-placeholder {
      color: #c6c6c6;
    }

    &:focus {
      outline: none; // 활성화 효과 빼기
    }
  }
`;
//+input 글씨 설정 방법을 모르겠어요...ㅜㅜ OK, margin-top 변경(아래 나오는 margin-top 전부 변경)

export const WriteContent = styled.div`
  color: #767676;
  margin-top: 15px;
`;

export const WriteContentBox = styled.div`
  display: flex;
  min-height: 264px;
  width: 1024px;
  border-width: 1px;
  border-color: #439f68;
  border-radius: 10;
  backgroundcolor: #ffffff;
  margin-top: 8px;

  textarea {
    color: #2d2d2d;
    border: 1px solid ##bababa;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #439f68;
    padding: 30px 20px;
    width: 100%;

    &::-webkit-input-placeholder {
      color: #c6c6c6;
    }

    &:focus {
      outline: none; // 활성화 효과 빼기
    }
`;
// + input ok,

export const WriteAttachPhoteButton = styled.button`
  display: flex;
  width: 140px;
  height: 37px;
  border-radius: 10;
  backgroundcolor: #d9ece1;
  margin-left: 8px;
  margin-bottom: 8px;
`;
//이미지 추가하기 버튼 ok

export const WriteAttachment = styled.div`
  color: #767676;
`;

export const WriteAttachmentalign = styled.div`
  // flex-direction: row;
  margin-top: 8px;
`;

export const WriteAttachmentBox = styled.div`
  border-width: 1px;
  border-color: #bababa;
  border-radius: 10;
  display: flex;
  margin-top: 40px;

  label {
    height: 100%;
    display: inline-block;
    background-color: #439f68;
    font-family: "Noto Sans KR";
    display: block;
    border-radius: 10px;
    color: white;
    padding: 15px 20px;
    border: 0px solid #439f68;
    font-size: 16px;
    font-weight: 500;
    line-height: -14px;
    margin: auto 0;
  }

  input {
    color: #2d2d2d;
    border: 1px solid ##bababa;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #439f68;
    padding: 10px 20px;

    &::-webkit-input-placeholder {
      color: #c6c6c6;
    }

    &:focus {
      outline: none; // 활성화 효과 빼기
    }
  }

  div {
    margin-right: 10px;
    color: #767676;

    border: 1px solid #D9D9D9;
    padding: 5px 20px;
    border-radius: 10px;
}
  
`;

export const WriteAttachmentButton = styled.div`
  display: flex;
  width: 99px;
  height: 47px;
  border-radius: 10;
  backgroundcolor: #d9ece1;
  margin-left: 8px;
  color: #439f68;
`;
// + 안에 글씨(찾아보기) 색 바꾸고 위치 지정하기 ok

export const WriteAttachmentSaveButton = styled.div`
  display: flex;
  border-radius: 10;
  backgroundcolor: #439f68;
  margin-left: 8px;
  color: #ffffff;

  button {
    margin-top: 25px;
    font-family: "Noto Sans KR";
    display: block;
    border-radius: 10px;
    color: white;
    padding: 15px 20px;
    border: 0px solid #439f68;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const WritePrice = styled.div`
  color: #767676;
  margin-top: 40px;
`;

export const WritePriceBox = styled.div`
  display: flex;
  width: 497px;
  margin-top: 10px;
  height: 77px;
  border-width: 1px;
  border-color: #bababa;
  border-radius: 10;
  backgroundcolor: #ffffff;
  gap: 20px;
  align-items: flex-end;

  input {
    color: #2d2d2d;
    border: 1px solid ##bababa;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #439f68;
    padding: 10px 20px;
    width: 100%;
    height: 48px;

    &::-webkit-input-placeholder {
      color: #c6c6c6;
    }

    &:focus {
      outline: none; // 활성화 효과 빼기
    }

`;
//+ 안에 포인트 ok

export const WriteCompleteButton = styled.div`
  display: flex;
  border-radius: 10;
  backgroundcolor: #439f68;
  margin: 20px 0 200px 0;

  button {
    margin-top: 25px;
    font-family: "Noto Sans KR";
    display: block;
    border-radius: 10px;
    color: white;
    padding: 15px 20px;
    border: 0px solid #439f68;
    font-size: 16px;
    font-weight: 500;
  }
`;

//경험 물어보기 글쓰기 기능
export const AskSection = styled.div`
  margin: 0 370px;
`;

export const AskTitle = styled.div`
  font-style: bold;
  color: #2b2b2b;
`;

export const AskSubTitle = styled.div`
  color: #767676;
`;

export const AskName = styled.div`
  color: #767676;
`;

export const AskNameBox = styled.div`
  display: flex;
  width: 1024px;
  height: 77px;
  border-width: 1px;
  border-color: #bababa;
  border-radius: 10;
  backgroundcolor: #ffffff;

  input {
    color: #767676;
    margin-left: 8px;
  }
`;
//+ 안에 글씨 설정 ok

export const AskContent = styled.div`
  color: #767676;
`;

export const AskContentBox = styled.div`
  display: flex;
  height: 264px;
  width: 1024px;
  border-width: 1px;
  border-color: #439f68;
  border-radius: 10;
  backgroundcolor: #ffffff;
`;

export const AskCompleteButton = styled.button`
  display: flex;
  width: 140px;
  height: 37px;
  border-radius: 10;
  backgroundcolor: #d9ece1;
  margin-left: 8px;
  margin-bottom: 8px;
`;
//+ 이미지 추가하기 버튼 ok
