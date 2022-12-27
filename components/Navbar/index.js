// import { useEffect, useState } from "react";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ categories, topics }) {
  return (
    <>
      <MobileNavbar categories={categories} topics={topics} />
      <DesktopNavBar categories={categories} topics={topics} />
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
