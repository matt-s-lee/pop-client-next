// import { useEffect, useState } from "react";

import FullNavbar from "./FullNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <MobileNavbar />
      <FullNavbar />
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
