import ArrowUp from "../img/icon/arrow-up.svg";
import ArrowDown from "../img/icon/arrow-down.svg";
import { useState } from "react";

function ToggledArrow({ setIsShowContent }) {
  const [arrowImage, setArrowImage] = useState(ArrowDown); //초기값 지정

  /* 화살표를 클릭하면
    첫번째로, 화살표 모양을 바꾼다. up/down
    두번째로, 부모 컴포넌트인 MyPage에서 글 리스트를 보여주고 숨길 수 있도록
    부모의 State인 isShowContent를 변경해준다. (부모 state는 함수를 props로 받아 접근한다) */
  const toggleArrow = () => {
    if (arrowImage == ArrowDown) {
      setArrowImage(ArrowUp);
      setIsShowContent(true); // 펼친상태
    } else {
      setArrowImage(ArrowDown);
      setIsShowContent(false); // 접은 상태
    }
  };

  return (
    <>
      <button
        onClick={() => {
          toggleArrow();
        }}
      >
        <img src={arrowImage} alt="" />
      </button>
    </>
  );
}

export default ToggledArrow;
