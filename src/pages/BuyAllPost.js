import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    MediaDiv,
    Main,
} from '../css/styledComponenet';

import Header2 from '../components/Header2';
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
            if(buyPost.length == 0){
                console.log("response user check");
                console.log(response.user);
                setBuyPost(response);
                getUserInfo(response.user);
            }
        });
    };

    const getUserInfo = (user) => {
        console.log("getUserInfo call");
        fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/user/${user}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
        }
        ).then(async (data) => {
        // json을 response에 넣는다.
        let response = await data.json();
        console.log("get user data");
        console.log(response);
        setUserInfo(response);
        });
    };

    useEffect(() => {
        getBuyPost();
    }, []);

    //user
    const [userInfo, setUserInfo] = useState([]);

    const goLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <MediaDiv>
                <Header2/>
                <Main>
                    <WonderPost buypost={buyPost} userinfo={userInfo}/>
                </Main>
            </MediaDiv>
        </>
    )
}

export default BuyAllPost