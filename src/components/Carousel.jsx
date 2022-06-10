import styled from "styled-components";
import IcLeft from "../assets/icon_left.svg?component";
import IcRight from "../assets/icon_right.svg?component";
import { useState } from "react";

export default function Carousel() {
  const images = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1487734092093-e5b02908580e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1615310748170-29d7088865ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a25pdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState();

  const onClickLeftButton = () => {
    setDirection("left");

    if (currentIdx == 0) {
      setCurrentIdx(images.length - 1);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const onClickRightButton = () => {
    setDirection("right");

    if (currentIdx == images.length - 1) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };
  return (
    <StWrapper>
      <StImageWrapper key={images[currentIdx].id} direction={direction}>
        <StLeftButton onClick={onClickLeftButton} />
        <StRightButton onClick={onClickRightButton} />
        <img src={images[currentIdx].url} alt={images[currentIdx].id} />
      </StImageWrapper>
    </StWrapper>
  );
}
const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const StImageWrapper = styled.div`
  position: relative;
  & > img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const StLeftButton = styled(IcLeft)`
  position: absolute;
  top: calc(100% / 2);
  left: 10px;
  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`;
const StRightButton = styled(IcRight)`
  position: absolute;
  top: calc(100% / 2);
  right: 10px;
  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`;
