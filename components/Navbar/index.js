import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

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
    <>
      <MobileNavbar />
      <DesktopNavBar />
    </>
  );
}