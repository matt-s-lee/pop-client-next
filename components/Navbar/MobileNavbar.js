import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import ReactComponent from "../../public/popEN.png";
import { CgMenu } from "react-icons/cg";
import NavDrawer from "./NavDrawer";

export default function MobileNavbar() {
  const [openMain, setOpenMain] = useState(false);
  const handleClick = () => {
    setOpenMain(!openMain);
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
          <CgMenu fontSize="1.5em" />
        </HamburgerElement>
        <NavDrawer openMain={openMain} handleClick={handleClick} />
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
