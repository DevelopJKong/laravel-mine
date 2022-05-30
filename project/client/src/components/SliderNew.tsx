import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const sliderItems = [
    {
        id: 1,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "I'd like to be Javascript developer",
        bg: "f5fafd",
        url: "/contact",
    },
    {
        id: 2,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "I like to use Node.js and Nest.js ⭐",
        bg: "fcf1ed",
        url: "/boards",
    },
    {
        id: 3,
        img: "https://i.imgur.com/dtuN6qr.png",
        title: "Cafe Small House ☕",
        desc: "When i make view part, i usually use React 😎",
        bg: "fbf0f4",
        url: "/",
    },
];

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
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

const Wrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
`;

const Slide = styled(motion.div)<{ bg: string }>`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1500px;
  position: relative;
`;

const Image = styled(motion.img)`
  height: 80%;
`;

const ImgContainer = styled(motion.div)`
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

const box = {
    invisible: (isBack: boolean) => ({
        x: isBack ? "-97%" : "97%",
        opacity:0

    }),
    visible: {
        x: 0,
        opacity:1

    },
    exits: (isBack: boolean) => ({
        x: isBack ? "97%" : "-97%",
        opacity:0
    }),
};

const SliderNew = () => {
    const [visible, setVisible] = useState(1);
    const [isBack, setIsBack] = useState(false);
    const nextLeft = () => {
        setIsBack(false);
        setVisible((current) => (current > 1 ? current - 1 : 3));
    };
    const nextRight = () => {
        setIsBack(true);
        setVisible((current) => (current < 3 ? current + 1 : 1));
    };

    return (
        <div>
            <AnimatePresence   custom={isBack}>
                {sliderItems.map((item) =>
                    item.id === visible ? (
                        <Container key={item.id}>
                            <Arrow onClick={nextLeft} direction="left">
                                <ArrowLeftOutlined />
                            </Arrow>
                            <Wrapper
                                custom={isBack}
                                variants={box}
                                initial="invisible"
                                animate="visible"
                                exit="exits"
                            >
                                <Slide bg={item.bg}>
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
                            </Wrapper>
                            <Arrow onClick={nextRight} direction="right">
                                <ArrowRightOutlined />
                            </Arrow>
                        </Container>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
};

export default SliderNew;
