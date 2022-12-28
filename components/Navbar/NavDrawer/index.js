import { useState } from "react";
import styled from "styled-components";

import ResourcesDrawer from "./ResourcesDrawer";
import ProvincesDrawer from "./ProvincesDrawer";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CgMenuMotion } from "react-icons/cg";

export default function NavDrawer({ open, setOpen, handleClick }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      //   onClick={handleClick}
      onClose={handleClick}
      PaperProps={{
        sx: {
          width: 240,
          elevation: 8,
          padding: 1,
        },
      }}
    >
      <StyledMenuMotion />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleOpen}>
            <ListItemText>Access Resources</ListItemText>
          </ListItemButton>
          <ResourcesDrawer
            handleClick={handleClick}
            drawerOpen={drawerOpen}
            handleOpen={handleOpen}
          />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>Explore by Province</ListItemText>
          </ListItemButton>
          <ProvincesDrawer
            handleClick={handleClick}
            drawerOpen={drawerOpen}
            handleOpen={handleOpen}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

const StyledMenuMotion = styled(CgMenuMotion)`
  margin-top: 0.5em;
  font-size: 1.5em;
  position: relative;
  left: 7.7em;
`;
