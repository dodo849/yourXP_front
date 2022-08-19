import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom';

import {
    MediaDiv,
    ListMain,
    } from '../css/styledComponenet';

import Kategorie from '../components/Kategorie';
import PostList from '../components/PostListB';
import Header2 from '../components/Header2';

function BuyPostList() {


    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

    const goLogin = () => {
        navigate("/login");
    };

    return (
        <MediaDiv>
            <Header2/>
            <ListMain>
                <Kategorie/>
                <PostList/>
            </ListMain>
        </MediaDiv>
    )
}

export default BuyPostList