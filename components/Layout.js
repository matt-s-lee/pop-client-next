import Footer from "./Footer";
import Navbar from "./Navbar/index";
import Navigator from "./Navigator";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Navigator />
      <Footer />
    </>
  );
}

// export default function Layout({ categories, topics }) {
//   return (
//     <>
//       <Navbar categories={categories} topics={topics} />
//     </>
//   );
// }
