import React, {useState, useEffect} from 'react'

import {
    PostListDiv,
    PostSearchDiv,
    PostSearch,
    Button,
    GreenButton,
    MoreDiv,
    GrayButton,
    } from '../css/styledComponenet';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import ListCardB from './ListCardB';

function PostListB() {
    const [buyPosts, setBuyPosts] = useState([]);

    const getBuyPosts = async () => {
        console.log("getBuyPosts call");
        await fetch(
            "https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/buyXP/buys/views",
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
            setBuyPosts(response);
        });
    };

    useEffect(() => {
        getBuyPosts();
    }, []);

    return (
        <PostListDiv>
            <PostSearchDiv>
                <PostSearch>
                    <input type="text" placeholder='검색어를 입력해주세요.' />
                    <FontAwesomeIcon icon={faSistrix} size='lg'color='#439F68' cursor='pointer'/>
                </PostSearch>
            </PostSearchDiv>
            <Button>
                <GreenButton onClick={() => {alert("준비중입니다");}}>글쓰기</GreenButton>
            </Button>
            <hr/>
            {buyPosts.slice(0).reverse().map(post => (
                <ListCardB key={post.id} id={post.id} title={post.title} summary={post.text} tag={post.tag} view={post.hits} date={post.create_time.slice(0,-17)} price={post.price} deadline={post.deadline.slice(0,-10)}></ListCardB>
            ))} 
            <MoreDiv>
                <GrayButton>더보기</GrayButton>
            </MoreDiv>
        </PostListDiv>
    )
}

export default PostListB