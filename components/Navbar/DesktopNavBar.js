import { useContext, useEffect } from "react";

import { LanguageContext } from "../../context/LanguageContext";
import { BookmarksContext } from "../../context/BookmarksContext";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { libre } from "../../styles/font";

import { Button } from "@mui/material";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import ReactComponent from "../../public/popEN.png";
import NavDropdown from "./NavDropdown/index.js";
import ClientOnly from "../ClientOnly";

export default function DesktopNavBar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { bookmarks } = useContext(BookmarksContext);

  return (
    <Wrapper>
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
                <StyledLink href="/about" className={libre.className}>
                  About Us
                </StyledLink>
              </Button>
            </Li>
            <Li>
              <NavDropdown text={"Explore by Province & Territory"} />
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
            <Li>
              <Link href="/bookmarks">
                <StarOutline bookmarks={bookmarks} />
                <StarFull bookmarks={bookmarks} />
              </Link>
            </Li>
          </Ul>
        </ClientOnly>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.54);
`;

const Nav = styled.nav`
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  z-index: 10;
  display: none;

  @media only screen and (min-width: 600px) {
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

const Ul = styled.ul`
  display: flex;
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
`;

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

const StarOutline = styled(TiStarOutline)`
  display: ${(props) => (props.bookmarks.length > 0 ? "none" : "block")};
`;

const StarFull = styled(TiStarFullOutline)`
  display: ${(props) => (props.bookmarks.length === 0 ? "none" : "block")};
`;
