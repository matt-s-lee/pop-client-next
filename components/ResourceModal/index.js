import styled from "styled-components";
import Drawer from "@mui/material/Drawer";

import { Tag } from "../Filter/FilterTagSection/FilterTag";

export default function ResourceModal({ open, handleClick, tags }) {
  return (
    <Drawer
      open={open}
      anchor="right"
      onClick={handleClick}
      onClose={handleClick}
      BackdropProps={{ invisible: true }}
      PaperProps={{
        sx: {
          width: 400,
          elevation: 8,
          padding: 1,
        },
      }}
    >
      <h2>About this resource</h2>
      <Section>
        <h3>How it helps</h3>
        <p>Text</p>
      </Section>
      <Section>
        <h3>Topics covered</h3>
        <Tags>
          {tags?.map((tag) => {
            return <StyledTag key={tag}>{tag}</StyledTag>;
          })}
        </Tags>
      </Section>
      <Section>
        <h3>How I can use it</h3>
        <p>Text</p>
      </Section>
    </Drawer>
  );
}

const Section = styled.div`
  padding: 1em;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled(Tag)``;

  // let anchor;
  // if (mobile) {
  //   anchor = "bottom"
  // } else {
  //   anchor = "right"
  // }

// import { useState } from "react";

// import styled from "styled-components";

// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Skeleton from "@mui/material/Skeleton";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// export default function Navigator() {
//   const [open, setOpen] = useState(false);
//   console.log(open);

//   return (
//     <div>
//       <Button onClick={() => setOpen(!open)}>Open</Button>
//       <SwipeableDrawer
//         open={open}
//         anchor="bottom"
//         onClick={() => setOpen(false)}
//         onClose={() => setOpen(false)}
//         onOpen={() => setOpen(true)}
//       >
//         Test test test
//       </SwipeableDrawer>
//     </div>
//     // <SwipeableDrawer
//     //   anchor="bottom"
//     //   open={open}
//     //   onClose={toggleDrawer(false)}
//     //   onOpen={toggleDrawer(true)}
//     //   swipeAreaWidth={drawerBleeding}
//     //   disableSwipeToOpen={false}
//     //   ModalProps={{
//     //     keepMounted: true,
//     //   }}
//     // >
//     //   <Button onClick={toggleDrawer(true)}>Open</Button>
//     //   <Box
//     //     sx={{
//     //       position: "absolute",
//     //       top: -drawerBleeding,
//     //       borderTopLeftRadius: 8,
//     //       borderTopRightRadius: 8,
//     //       visibility: "visible",
//     //       right: 0,
//     //       left: 0,
//     //     }}
//     //   >
//     //     <Puller />
//     //     <span>Test</span>
//     //   </Box>
//     //   <Box
//     //     sx={{
//     //       px: 2,
//     //       pb: 2,
//     //       height: "100%",
//     //       overflow: "auto",
//     //     }}
//     //   >
//     //     <Skeleton variant="rectangular" height="100%" />
//     //   </Box>
//     // </SwipeableDrawer>
//   );
// }

// const Puller = styled.div`
//   width: 6em;
//   height: 1em;
//   position: absolute;
//   top: 1em;
//   left: 2em;
// `;
