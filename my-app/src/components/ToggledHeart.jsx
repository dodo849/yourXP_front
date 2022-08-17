import { useState } from "react";
import Heart from "../img/icon/heart.svg";
import ThickHeart from "../img/icon/theart.svg";

function ToggledHeart({ setIsHeart }) {
    const [heartImage, setHeartImage] = useState(Heart); //초기값 지정

    const toggleHeart = () => {
        if (heartImage == Heart) {
            setHeartImage(ThickHeart);
            setIsHeart(true); // 누른후
        } else {
            setHeartImage(Heart);
            setIsHeart(false); // 누르기 전
        }
    };
    const heartStyle = {
        margin: '0',
        padding: '0',
        backgroundColor: 'white',
        cursor: 'pointer',
        border: 'none',
        height: '14px'
    };
    
    return (
        <>
            <button style={heartStyle}
                onClick={() => {
                toggleHeart();
            }}
            >
                <img src={heartImage} width='14px' alt="" />
            </button>
        </>
    );
}

export default ToggledHeart