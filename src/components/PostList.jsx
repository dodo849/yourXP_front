import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  PostListDiv,
  PostSearchDiv,
  PostSearch,
  Button,
  WhiteButton,
  GreenButton,
  MoreDiv,
  GrayButton,
  StandardModalDiv,
} from "../css/styledComponenet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import ListCardS from "./ListCardS";
import StandardModal from "../components/StandardModal";
import { useNavigate } from "react-router-dom";

function PostList() {
  const [modal, setModal] = useState(false);
  const [sellPosts, setSellPosts] = useState([]);

  // 화면 전환
  const navigate = useNavigate();
  const goWritePost = () => {
    navigate("/writepost");
  };

  const getSellPosts = async () => {
    console.log("getSellPosts call");
    await fetch(
      "https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app/sellXP/views",
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
      setSellPosts(response);
    });
  };

  useEffect(() => {
    getSellPosts();
  }, []);

  return (
    <PostListDiv>
      <PostSearchDiv>
        <PostSearch>
          <input type="text" placeholder="검색어를 입력해주세요." />
          <FontAwesomeIcon
            icon={faSistrix}
            size="lg"
            color="#439F68"
            cursor="pointer"
          />
        </PostSearch>
      </PostSearchDiv>
      <Button>
        <WhiteButton
          onClick={() => {
            setModal(!modal);
          }}
        >
          추천순
        </WhiteButton>
        {modal === true ? (
          <StandardModalDiv>
            <StandardModal />
          </StandardModalDiv>
        ) : null}
        <GreenButton onClick={goWritePost}>글쓰기</GreenButton>
      </Button>
      <hr />
      {sellPosts.map((post) => (
        <ListCardS
          key={post.id}
          id={post.id}
          imgName={post.images[0].image}
          title={post.title}
          summary={post.text}
          tag1={post.tag1}
          tag2={post.tag2}
          tag3={post.tag3}
          view={post.hits}
          date={post.create_time.slice(0, -17)}
          heart={post.recommend}
          price={post.price}
        ></ListCardS>
      ))}
      <MoreDiv>
        <GrayButton>더보기</GrayButton>
      </MoreDiv>
    </PostListDiv>
  );
}

export default PostList;
