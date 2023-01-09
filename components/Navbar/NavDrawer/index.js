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
import { TiStarOutline } from "react-icons/ti";

export default function NavDrawer({ openMain, handleClick }) {
  const [openProvinces, setOpenProvinces] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const handleOpenProvinces = () => {
    setOpenProvinces(!openProvinces);
  };
  const handleOpenResources = () => {
    setOpenResources(!openResources);
  };

  return (
    <Drawer
      open={openMain}
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
      <StyledMenuMotion onClick={handleClick} />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleOpenResources}>
            <ListItemText>Access Resources</ListItemText>
          </ListItemButton>
          <ResourcesDrawer
            handleOpenResources={handleOpenResources}
            openResources={openResources}
            handleClick={handleClick} // closes main drawer
          />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText onClick={handleOpenProvinces}>
              Explore by Province & Territory
            </ListItemText>
          </ListItemButton>
          <ProvincesDrawer
            handleOpenProvinces={handleOpenProvinces}
            openProvinces={openProvinces}
            handleClick={handleClick} // closes main drawer
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
