import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import {
    MediaDiv,
    ListMain,
    } from '../css/styledComponenet';
import {
    MainDiv,
    MenuDiv,
    Text,
    ChatDiv,
    ChatListDiv,
    ListBox,
    Img,
    User,
    Summary,
    Content,
    Date,
    ChatContentDiv,
    ChatContent,
    Chatting,
    UserName,
    YourTextBox,
    MyTextBox,
    ChatBarDiv,
} from  '../css/ChatStyle';

import Picture from "../img/icon/picture.svg";
import Smile from "../img/icon/smile.svg";
import Plane from "../img/icon/plane.svg";

function ChattingPage() {
    return (
        <MediaDiv>
            <Header></Header>

            <ListMain>
                <MainDiv>
                    <MenuDiv>
                        <Text>채팅 목록</Text>
                    </MenuDiv>
                    <ChatDiv>
                        <ChatListDiv>
                            <ListBox>
                                <Img> </Img>
                                <Summary>
                                    <User>LA떠돌이</User>
                                    <Content>무엇이 궁금하신가요?</Content>
                                </Summary>
                                <Date>09:41</Date>
                            </ListBox>
                            <ListBox>
                                <Img> </Img>
                                <Summary>
                                    <User>해운대불토끼</User>
                                    <Content>무엇이 궁금하신가요?</Content>
                                </Summary>
                                <Date>7월 16일</Date>
                            </ListBox>
                            <ListBox>
                                <Img> </Img>
                                <Summary>
                                    <User>멋사회장</User>
                                    <Content>무엇이 궁금하신가요?</Content>
                                </Summary>
                                <Date>1년전</Date>
                            </ListBox>
                        </ChatListDiv>
                        <ChatContentDiv>
                            <ChatContent>
                                <Img> </Img>
                                <Chatting>
                                    <UserName>LA떠돌이</UserName>
                                    <YourTextBox>안녕하세요 작년 상반기에 미국으로 교환학생 다녀왔습니다.</YourTextBox>
                                    <YourTextBox>무엇이 궁금하신가요?</YourTextBox>
                                    <MyTextBox>교환 학생은 대부분 J1 비자를 발급 받던데, 교환 학생 J1 비자는 미국 학교에서 수학하는 학기(1월~5월)가 끝날 때 비자 유효 기간도 만료되는 것으로 알고 있습니다. 
그런데 제가 내년 2학기도 미국 대학에서 보내고 싶어서 내년 1학기 중에 미국에서 교환학생 프로그램을 한번 더 신청하려고 합니다, 합불 여부는 올해 말이 되어야 나와요.  
그래서 미국 대학에서 내년 1학기만 수학할지, 1,2학기 모두 수학할지 불확실한 상황인데, 이런 경우에는 비자를 발급 받을 때 어떻게 해야 할까요?</MyTextBox>                   
                                </Chatting>
                            </ChatContent>
                            <ChatBarDiv>
                                <img src={Picture} width='20px' height='20px' />
                                <img src={Smile} width='20px' height='20px'/>
                                <input type="text" placeholder='메세지를 입력하세요.' />
                                <img src={Plane} width='20px' height='20px'/>
                            </ChatBarDiv>
                        </ChatContentDiv>
                    </ChatDiv>
                </MainDiv>
            </ListMain>
        </MediaDiv>
    )
}

export default ChattingPage