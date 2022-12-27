import { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { positions } from "@mui/system";
import { FadeIn } from "./FadeIn";

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
          x
        </CloseButton>
        <ButtonStyled visible={visible} onClick={handleClick}>
          Not sure where to start?
        </ButtonStyled>
      </FadeIn>
      <Drawer
        open={open}
        anchor="right"
        onClick={handleClick}
        onClose={handleClick}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: 240,
            height: 350,
            elevation: 8,
            padding: 1,
            top: 300,
            borderRadius: 2,
          },
        }}
      >
        Have questions? E-mail us at poweroverpain@ohri.ca to get in touch with
        a site navigator
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(100vh - 8em);
  left: calc(100vw - 7em);
`;
const ButtonStyled = styled.button`
  color: white;
  width: 6em;
  background: black;
  backdrop-filter: blur(10px);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  border: none;
  border-radius: 0.5em;
`;
const CloseButton = styled.button`
  width: 1em;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  margin-bottom: -0.2em;
  border: none;
  border-radius: 0.1em;
`;

// const [clientWindowHeight, setClientWindowHeight] = useState("");
// console.log(clientWindowHeight);

// const handleScroll = () => {
//   setClientWindowHeight(window.scrollY);
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// });

// const Wrapper = styled.div`
//   @media (prefers-reduced-motion: no-preference) {
//     animation-name: ${fadeIn};
//     animation-fill-mode: backwards;
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }

// <SwipeableDrawer
//   anchor="bottom"
//   open={open}
//   onClose={toggleDrawer(false)}
//   onOpen={toggleDrawer(true)}
//   swipeAreaWidth={drawerBleeding}
//   disableSwipeToOpen={false}
//   ModalProps={{
//     keepMounted: true,
//   }}
// >
//   <Button onClick={toggleDrawer(true)}>Open</Button>
//   <Box
//     sx={{
//       position: "absolute",
//       top: -drawerBleeding,
//       borderTopLeftRadius: 8,
//       borderTopRightRadius: 8,
//       visibility: "visible",
//       right: 0,
//       left: 0,
//     }}
//   >
//     <Puller />
//     <span>Test</span>
//   </Box>
//   <Box
//     sx={{
//       px: 2,
//       pb: 2,
//       height: "100%",
//       overflow: "auto",
//     }}
//   >
//     <Skeleton variant="rectangular" height="100%" />
//   </Box>
// </SwipeableDrawer>

// const Puller = styled.div`
//   width: 6em;
//   height: 1em;
//   position: absolute;
//   top: 1em;
//   left: 2em;
// `;
