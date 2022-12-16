import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import ReactComponent from "../../public/popFr.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
// import SearchBar from "./SearchBar";

const FullNavbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Notif>
        {language === "en"
          ? "In need of immediate crisis support? Call 911 if you or someone you know is in immediate danger or needs urgent medical care."
          : "Besoin d'un soutien immédiat en cas de crise ? Appelez le 911 si vous ou quelqu'un que vous connaissez êtes en danger immédiat ou avez besoin de soins médicaux urgents."}
      </Notif>
      <Nav>
        <Ul>
          <LogoLi>
            <StyledLogo src={ReactComponent} />
          </LogoLi>
          <Li>
            {language === "en" ? "Tools and Support" : "Outils et assistance"}
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
      </Nav>
    </>
  );
};

export default FullNavbar;

const Nav = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  padding: 1em;
  z-index: 10;
  display: none;

  @media only screen and (min-width: 450px) {
    display: contents;
    padding: 1em;
  }
`;

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

const StyledLogo = styled(Image)`
  height: 60px;
  width: auto;
`;

const Tab = styled(Link)`
  width: 100%;
  color: var(--clr-fg);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 24px;
  /* Change the color of links on hover */
  &:hover {
    color: var(--clr-fg);
  }
  /* Add a color to the active/current link */
  &:active {
    background-color: var(--clr-primary);
    color: var(--clr-fg);
  }
`;

const Ul = styled.ul`
  display: flex;
  margin-right: 1.5em;
  align-items: center;
  list-style-type: none;
  height: 4em;
`;

// const StyledButton = styled.button`
//   font-size: 16px;
//   font-weight: 700;
//   color: #fff;
//   background-color: #f54e5f;
//   border: none;
//   outline: none;
//   border-radius: 3px;
//   padding: 10px 20px;
// `;

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

const LogoLi = styled(Li)`
  flex-grow: 6;
`;

const ClickLi = styled(Li)`
  &:hover {
    cursor: pointer;
  }
`;
