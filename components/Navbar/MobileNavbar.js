import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import ReactComponent from "../../public/popFr.png";
import { CgMenu, CgMenuMotion } from "react-icons/cg";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <NavItems>
        <NavElement>
          <Logo src={ReactComponent} alt={"Surmonter sa douleur logo"}></Logo>
        </NavElement>
        <HamburgerElement onClick={handleClick}>
          {isMenuOpen ? (
            <CgMenuMotion fontSize="1.5em" />
          ) : (
            <CgMenu fontSize="1.5em" />
          )}
        </HamburgerElement>
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
  padding-left: 0;
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
