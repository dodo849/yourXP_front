import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import {
    MediaDiv,
    Main,
} from '../css/styledComponenet';

import ShowAllPost from '../components/ShowAllPost';
import WriteReview from '../components/WriteReview';
import Header2 from '../components/Header2';


function SellAllPost() {
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
                    { sellPost.length != 0 && <ShowAllPost sellpost={sellPost} userinfo={userInfo}/>}
                    
                    <WriteReview/>
                </Main>
            </MediaDiv>
        </>

    )
}

export default SellAllPost