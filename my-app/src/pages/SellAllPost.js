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
import ShowAllPost from '../components/ShowAllPost';
import WriteReview from '../components/WriteReview';


function SellAllPost() {
    const [sellPost, setSellPost] = useState([]);
    const {sellXP_id} = useParams();

    const getSellPost = async () => {
        console.log("getSellPost call");
        await fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/${sellXP_id}`,
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
            setSellPost(response);
        });
    };

    useEffect(() => {
        getSellPost();
    }, []);
    

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };
    

    return (        <>
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
                                <p >회원가입</p>
                            </Sign>
                        </SearchSign>  
                    </TopDiv>
                    
                    <MenuInfo>
                        <InfoBig>여러 경험을 <span>들어봐요</span></InfoBig>
                        <InfoSmall>다른 사람의 경험을 읽고 반응을 남겨주세요!</InfoSmall>
                    </MenuInfo>
                    <NavBar/>
                </Header>
 
                <Main>
                    <ShowAllPost/>
                    <WriteReview/>
                </Main>
            </MediaDiv>
        </>

    )
}

export default SellAllPost