import styled from "styled-components";

//경험 들려주기 글쓰기 기능
export const WriteSection = styled.div`
    margin: 0 370px;
    margin-top: 75px;
`;

export const WriteTitle = styled.div`
    font-style: bold;
    color: #2B2B2B;
`;

export const WriteSubTitle = styled.div`
    color: #767676;
    margin-top: 10px;
`;
//margin-top 숫자는 바꾸기(live server로 안 보여서 수정을 못 함)

export const WriteName = styled.div`
    color: #767676;
    margin-top: 15px;
`;
//margin-top 숫자 변경

export const WriteNameBox = styled.div`
    border-width: 1px;
    border-color: #BABABA;
    border-radius: 10;
    backgroundColor: #FFFFFF;
    display: flex;
    height: 77px;
    width: 1024px;
    margin-top: 8px;

    input {
        color: #767676;
        margin-left: 8px;
    }
`;
//+input 글씨 설정 방법을 모르겠어요...ㅜㅜ OK, margin-top 변경(아래 나오는 margin-top 전부 변경)

export const WriteContent = styled.div`
    color: #767676;
    margin-top: 15px;
`;

export const WriteContentBox = styled.div`
    display: flex;
    height: 264px;
    width: 1024px;
    border-width: 1px;
    border-color: #439F68;
    border-radius: 10;
    backgroundColor: #FFFFFF;
    margin-top: 8px;

    input {
        color: #C6C6C6;
        margin-left: 8px;
    }
`;
// + input ok, 

export const WriteAttachPhoteButton = styled.button`
    display: flex;
    width: 140px;
    height: 37px;
    border-radius: 10;
    backgroundColor: #D9ECE1;
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
    border-color: #BABABA;
    border-radius: 10;
    display: flex;
    height: 81px;
    width: 497px;
`;

export const WriteAttachmentButton = styled.div`
    display: flex;
    width: 99px;
    height: 47px;
    border-radius: 10;
    backgroundColor: #D9ECE1;
    margin-left: 8px;
    color: #439F68;
`;
// + 안에 글씨(찾아보기) 색 바꾸고 위치 지정하기 ok

export const WriteAttachmentSaveButton = styled.div`
    display: flex;
    width: 70px;
    height: 47px;
    border-radius: 10;
    backgroundColor: #439F68;
    margin-left: 8px;
    color: #FFFFFF;
`;

export const WritePrice = styled.div`
    color: #767676;
`;

export const WritePriceBox = styled.div`
    display: flex;
    width: 497px;
    height: 77px;
    border-width: 1px;
    border-color: #BABABA;
    border-radius: 10;
    backgroundColor: #FFFFFF;
    
    input {
        color: #767676;
    }
`;
//+ 안에 포인트 ok

export const WriteCompleteButton = styled.div`
    display: flex;
    width: 99px;
    height: 47px;
    border-radius: 10;
    backgroundColor: #439F68;
`;

//경험 물어보기 글쓰기 기능
export const AskSection = styled.div`
    margin: 0 370px;
`;

export const AskTitle = styled.div`
    font-style: bold;
    color: #2B2B2B;
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
    border-color: #BABABA;
    border-radius: 10;
    backgroundColor: #FFFFFF;

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
    border-color: #439F68;
    border-radius: 10;
    backgroundColor: #FFFFFF;
`;

export const AskCompleteButton = styled.button`
    display: flex;
    width: 140px;
    height: 37px;
    border-radius: 10;
    backgroundColor: #D9ECE1;
    margin-left: 8px;
    margin-bottom: 8px;
`;
//+ 이미지 추가하기 버튼 ok




