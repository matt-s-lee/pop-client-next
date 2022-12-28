import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const {
    topics,
    categories,
    supportNavBar,
    supportTypes,
    setSortedTopics,
    setSortedTypes,
  } = useContext(CategoriesContext);

  // Extract topics based on ordered lists
  const topicsArray = [];
  const typesArray = [];
  const extractList = (fullList, orderedList, filteredList) => {
    orderedList?.fields?.orderSections?.forEach((section) => {
      fullList?.items?.forEach((item) => {
        if (item.sys.id === section.sys.id) {
          filteredList.push(item);
        }
      });
    });
  };
  extractList(categories, topics, topicsArray);
  extractList(supportTypes, supportNavBar, typesArray);
  useEffect(() => {
    setSortedTopics(topicsArray);
    setSortedTypes(typesArray);
  }, [categories, topics, supportTypes, supportNavBar]);

  return (
    <>
      <MobileNavbar />
      <DesktopNavBar />
    </>
  );
}

// const [width, setWidth] = useState();

// componentDidMount() {
//   setWidth(window.innerWidth);
// };

// // Detect if mobile device used
// function handleWindowSizeChange() {
//   setWidth(window.innerWidth);
// }
// useEffect(() => {
//   setWidth(window.innerWidth);
//   if (typeof window !== "undefined") {
//     window.addEventListener("resize", handleWindowSizeChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowSizeChange);
//     };
//   }
// }, []);
// let isMobile = width <= 500;

// return <>{isMobile ? <MobileNavbar /> : <FullNavbar />}</>;
