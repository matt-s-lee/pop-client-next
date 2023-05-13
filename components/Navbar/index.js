import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";

import Link from "next/link";

import styled from "styled-components";
import { overpass } from "../../styles/font";
import { useRouter } from "next/router";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  const {
    topics,
    categories,
    supportTypesNav,
    supportTypes,
    setSortedTopics,
    setSortedTypes,
  } = useContext(CategoriesContext);

  // Extract topics based on ordered lists
  const extractList = (fullList, orderedList, filteredList) => {
    orderedList?.fields?.orderSections?.forEach((section) => {
      fullList?.items?.forEach((item) => {
        if (item.sys.id === section.sys.id) {
          filteredList.push(item);
        }
      });
    });
  };

  useEffect(() => {
    const topicsArray = [];
    const typesArray = [];
    extractList(categories, topics, topicsArray);
    extractList(supportTypes, supportTypesNav, typesArray);
    setSortedTopics(topicsArray);
    setSortedTypes(typesArray);
  }, [categories, topics, supportTypes, supportTypesNav]);

  return (
    <div>
      <Notif className={overpass.className}>
        {locale === "en-CA"
          ? "In need of immediate crisis support?"
          : "Besoin d'un soutien immédiat en cas de crise?"}
        <Link href="/help-now">
          <Button className={overpass.className}>
            {locale === "en-CA"
              ? "I need help now"
              : "J'ai besoin d'aide immédiate"}
          </Button>
        </Link>
      </Notif>
      <MobileNavbar />
      <DesktopNavBar />
    </div>
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

const Button = styled.div`
  margin-left: 1em;
  padding: 0.5em;
  border: none;
  border-radius: 0.3em;
  background: grey;
  transition: all 0.3s ease-in;

  &:hover {
    background: darkgrey;
  }
`;