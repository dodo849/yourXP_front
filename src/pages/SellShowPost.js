import React , {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
    MediaDiv,
    Main,
} from '../css/styledComponenet';

import ShowPost from '../components/ShowPost';
import ShowReview from '../components/ShowReview';
import Header2 from '../components/Header2';


function SellShowPost() {
    const [sellPost, setSellPost] = useState([]);
    
    const params = useParams();

    const getSellPost = () => {
        console.log("getSellPosts call");
        fetch(
        `https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/${params.postId}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
        }
        ).then(async (data) => {
        // json을 response에 넣는다.
        let response = await data.json();
        // console.log(response);
        if(sellPost.length == 0){
            console.log("response user check");
            console.log(response.user);
            setSellPost(response);
            getUserInfo(response.user);
        }
        });
    };

    const getUserInfo = (user) => {
        console.log("getUserInfo call");
        console.log(sellPost.user);
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
        getSellPost();
    }, []);

    //user
    const [userInfo, setUserInfo] = useState([]);

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

    const goLogin = () => {
        navigate("/login");
    };


    return (
        <>
            <MediaDiv>
                <Header2/>
                <Main>
                    <ShowPost sellpost={sellPost} userinfo={userInfo}/>
                    <ShowReview />
                </Main>
            </MediaDiv>
        </>
    )
}

export default SellShowPost