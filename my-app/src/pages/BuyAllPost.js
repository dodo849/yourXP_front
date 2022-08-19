import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    MediaDiv,
    Main,
    Header,
    TopDiv,
    SearchSign,
    Search,
    Sign,
    MenuInfo,
    InfoBig,
    InfoSmall,
} from '../css/styledComponenet';

import Logo from '../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

import NavBar from '../components/NavBar';
import WonderPost from '../components/WonderPost';

function BuyAllPost() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    const params = useParams();
    console.log(params.postId);

    const [buyPost, setBuyPost] = useState([]);

    const getBuyPost = async () => {
        console.log("getSellPosts call");
        await fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/buyXP/buys/detail/${params.postId}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
        }
        ).then(async (data) => {
            // json을 response에 넣는다.
            let response = await data.json();
            console.log(response);
            setBuyPost(response);
        });
    };

    useEffect(() => {
        getBuyPost();
    }, []);

    return (
        <>
            <MediaDiv>
                <Header>
                    <TopDiv>
                        <img onClick={goHome} src={Logo} width='170px' height='48px'/>
                        <SearchSign>
                            <Search>
                                <input type="text" placeholder='어떤 경험을 찾고 계신가요?' />
                                <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68' cursor='pointer'/>
                            </Search>
                            <Sign>
                                <p>로그인</p>
                                <p>회원가입</p>
                            </Sign>
                        </SearchSign>  
                    </TopDiv>

                    <MenuInfo>
                        <InfoBig>당신의 경험이 <span>필요해요</span></InfoBig>
                        <InfoSmall>자신의 경험을 사람들에게 채팅으로 알려주세요!</InfoSmall>
                    </MenuInfo>
                    <NavBar/>
                </Header>

                <Main>
                    <WonderPost buypost={buyPost}/>
                </Main>
            </MediaDiv>
        </>
    )
}

export default BuyAllPost