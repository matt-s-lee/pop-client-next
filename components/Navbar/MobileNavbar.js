import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";

import ReactComponent from "../../public/popEN.png";
import { CgMenu, CgMenuMotion } from "react-icons/cg";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <NavItems>
        <NavElement>
          <Link href="/">
            <Logo src={ReactComponent} alt="Surmonter sa douleur logo"></Logo>
          </Link>
        </NavElement>
        <HamburgerElement onClick={handleClick}>
          {/* {open ? (
            <CgMenuMotion fontSize="1.5em" />
          ) : (
            <CgMenu fontSize="1.5em" />
          )} */}
          <CgMenu fontSize="1.5em" />
        </HamburgerElement>
        <Drawer
          open={open}
          anchor="right"
          onClick={handleClick}
          onClose={handleClick}
          PaperProps={{
            sx: {
              width: 240,
              elevation: 8,
              padding: 1,
              display: flex,
              justifyContent: right,
            },
          }}
        >
          <CgMenuMotion fontSize="1.5em" />
        </Drawer>
      </NavItems>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media only screen and (min-width: 450px) {
    display: none;
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: left;
  padding: 0.5em;
`;

const NavElement = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  /* border: 1px solid red; */
  list-style-type: none;
  flex-grow: 1;
  padding-left: 0.6em;
`;

const Logo = styled(Image)`
  height: 3em;
  width: auto;
`;

const HamburgerElement = styled(NavElement)`
  justify-content: right;
  flex-grow: 5;
  padding-right: 0.6em;
`;
