import Link from "next/link";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";
import { useRouter } from "next/router";

import styled from "styled-components";
import { overpass, theme } from "../../../styles/font";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function ResourcesMenu({ anchorEl, open, handleClose }) {
  const { sortedTopics, sortedTypes } = useContext(CategoriesContext);
  const router = useRouter();
  const { locale } = router;
  console.log("sortedTypes", sortedTypes);
  return (
    <MenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <div>
        <Title className={overpass.className}>
          {locale === "en-CA" ? "Explore by Topic" : "Découvrir par sujet"}
        </Title>
        {sortedTopics &&
          sortedTopics.map((category) => {
            return (
              <Link
                key={category.sys.id}
                href={`/categories/${category.fields.slug[locale]}`}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {category.fields.titleNavBar[locale]}
                </MenuItem>
              </Link>
            );
          })}
      </div>
      <Divider />
      <SectionByType>
        <Title className={overpass.className}>
          {locale === "en-CA"
            ? "Explore By Support Type"
            : "Découvrir par type de soutien"}
        </Title>
        {sortedTypes &&
          sortedTypes.map((type) => {
            return (
              <MenuItem
                key={type.sys.id}
                onClick={handleClose}
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                <Link
                  href={
                    `/support/${type.fields.slug[locale]}` ??
                    type.fields.externalLinkOptional
                  }
                >
                  {type.fields.supportTypeName[locale]}
                </Link>
              </MenuItem>
            );
          })}
      </SectionByType>
    </MenuStyled>
  );
}

const MenuStyled = styled(Menu)`
  margin-top: 1em;
`;

const SectionByType = styled.div`
  padding: 0.8em 0 0.5em 0;
`;
const Title = styled.h3`
  margin: 0 0 0.3em 0.5em;
`;

  // const { topics, categories, supportNavBar, supportTypes } =
  //   useContext(CategoriesContext);

  // // Extract topics based on ordered lists
  // const sortedTopics = [];
  // const sortedTypes = [];
  // const extractList = (fullList, orderedList, filteredList) => {
  //   orderedList.fields.orderSections.forEach((section) => {
  //     fullList.items.forEach((item) => {
  //       if (item.sys.id === section.sys.id) {
  //         filteredList.push(item);
  //       }
  //     });
  //   });
  // };
  // extractList(categories, topics, sortedTopics);
  // extractList(supportTypes, supportNavBar, sortedTypes);

//   useEffect(() => {
//     setSortedTopics(extractList(categories, topics, sortedTopics));
//     sortedTypes(extractList(supportTypes, supportNavBar, sortedTypes));
//   }, [sortedTopics, sortedTypes]);

// if (categories && topics) {
//   topics.fields.orderSections.forEach((topic) => {
//     categories.items.forEach((category) => {
//       if (category.sys.id === topic.sys.id) {
//         sortedTopics.push(category);
//       }
//     });
//   });
// }
//   if (supportTypes && supportNavBar) {
//     supportNavBar.fields.orderSections.forEach((section) => {
//       supportTypes.items.forEach((supportType) => {
//         if (supportType.sys.id === section.sys.id) {
//           sortedTypes.push(supportType);
//         }
//       });
//     });
//   }
