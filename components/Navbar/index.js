import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";

import styled from "styled-components";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

import { overpass } from "../../styles/font";

export default function Navbar() {
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
        In need of immediate crisis support? Call 911 if you or someone you know
        is in immediate danger or needs urgent medical care.
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
