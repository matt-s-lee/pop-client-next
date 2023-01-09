import { useState } from "react";

import styled from "styled-components";
import { libre } from "../styles/font";

import Drawer from "@mui/material/Drawer";
import { FadeIn } from "./FadeIn";
import { RiCloseFill } from "react-icons/ri";

export default function Navigator() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setOpen(!open);
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <FadeIn>
        <CloseButton visible={visible} onClick={() => setVisible(false)}>
          <RiCloseFill />
        </CloseButton>
        <StartButton
          className={libre.className}
          visible={visible}
          onClick={handleClick}
        >
          Not sure where to start?
        </StartButton>
      </FadeIn>
      <Drawer
        className={libre.className}
        open={open}
        anchor="right"
        onClick={handleClick}
        onClose={handleClick}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: 240,
            height: 300,
            elevation: 8,
            top: 300,
            borderRadius: 2,
          },
        }}
      >
        <StyledDiv>
          <Title>Have questions?</Title>
          <Text>
            E-mail us at <Highlight>poweroverpain@ohri.ca</Highlight> to get in
            touch with a site navigator
          </Text>
        </StyledDiv>
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(100vh - 11.5em);
  left: calc(100vw - 8em);
  z-index: 1000;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  background-color: rgba(214, 214, 214, 0.8);
  color: grey;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  margin-bottom: -0.2em;
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.2em;
`;

const StartButton = styled.button`
  color: white;
  width: 6em;
  background: #345689;
  backdrop-filter: blur(10px);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  border: 1px solid black;
  padding: 1em 0;
  border-radius: 0.2em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  background: white;
  height: 80%;
`;

const Title = styled.h3`
  text-align: center;
`;

const Text = styled.p`
  margin-top: 1em;
`;

const Highlight = styled.p`
  color: var(--popBlue);
  margin: 0.5em 0;
  font-weight: 600;
`;
