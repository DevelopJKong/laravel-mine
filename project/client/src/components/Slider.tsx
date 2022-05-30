import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const sliderItems = [
    {
        id: 1,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "I'd like to be Javascript developer",
        bg: "f5fafd",
        url: "/contact"
    },
    {
        id: 2,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "I like to use Node.js and Nest.js ⭐",
        bg: "fcf1ed",
        url: "/boards"
    },
    {
        id: 3,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "When i make view part, i usually use React 😎",
        bg: "fbf0f4",
        url: "/"
    },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -33}%);

`;

const Slide = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1700px;

`;

const Image = styled.img`
  height: 80%;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(2);

    const handleClick = (direction: string) => {
        if (direction === "left") {
            setSlideIndex((current) => (current > 0 ? current - 1 : 2));
        } else {
            setSlideIndex((current) => (current < 2 ? current + 1 : 0));
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex((current) => (current > 0 ? current - 1 : 2));
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [slideIndex]);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to={item.url}>
                                <Button>CLICK HERE</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
