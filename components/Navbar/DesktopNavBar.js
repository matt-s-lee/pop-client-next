import { useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

import ReactComponent from "../../public/popEN.png";
import NavDropdown from "./NavDropdown/index.js";
import ClientOnly from "../ClientOnly";

export default function DesktopNavBar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Notif>
        In need of immediate crisis support? Call 911 if you or someone you know
        is in immediate danger or needs urgent medical care.
      </Notif>
      <Nav>
        <ClientOnly>
          <Ul>
            <Logo>
              <Link href="/">
                <StyledLogo alt="Power over Pain logo" src={ReactComponent} />
              </Link>
            </Logo>
            <Li>
              <Button>
                <StyledLink href="/about">About Us</StyledLink>
              </Button>
            </Li>
            <Li>
              <NavDropdown text={"Explore by Province"} />
            </Li>
            <Li>
              <NavDropdown text={"Access Resources"} />
            </Li>
            <ClickLi
              onClick={language === "fr" ? toggleLanguage : null}
              className={language === "en" && "clicked"}
            >
              EN
            </ClickLi>
            <Li>|</Li>
            <ClickLi
              onClick={language === "en" ? toggleLanguage : null}
              className={language === "fr" && "clicked"}
            >
              FR
            </ClickLi>
          </Ul>
        </ClientOnly>
      </Nav>
    </>
  );
}

const Notif = styled.div`
  background-color: #0a69b5;
  font-size: 14px;
  color: #fff;
  height: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 2em;
`;

const Nav = styled.nav`
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  z-index: 10;
  display: none;

  @media only screen and (min-width: 450px) {
    display: contents;
  }
`;

const Logo = styled.div`
  flex-grow: 6;
`;

const StyledLogo = styled(Image)`
  height: 60px;
  width: auto;
`;

// const Tab = styled(Link)`
//   width: 100%;
//   color: var(--clr-fg);
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 24px;
//   /* Change the color of links on hover */
//   &:hover {
//     color: var(--clr-fg);
//   }
//   /* Add a color to the active/current link */
//   &:active {
//     background-color: var(--clr-primary);
//     color: var(--clr-fg);
//   }
// `;

const Ul = styled.ul`
  display: flex;
  /* width: 100%; */
  /* margin-right: 1.5em; */
  align-items: center;
  list-style-type: none;
  padding: 0.5em 1em;
  background: white;
`;

const StyledLink = styled(Link)`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  //   font-size: 16px;
  //   font-weight: 700;
  //   color: #fff;
  //   background-color: #f54e5f;
  //   border: none;
  //   outline: none;
  //   border-radius: 3px;
  //   padding: 10px 20px;
`;

// const Header = styled(Link)`
//   font-size: 32px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 0 0 20px;
//   color: var(--clr-primary);
// `;

const Li = styled.li`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
  margin-left: 1.5em;
`;

const ClickLi = styled(Li)`
  &:hover {
    cursor: pointer;
  }
`;
