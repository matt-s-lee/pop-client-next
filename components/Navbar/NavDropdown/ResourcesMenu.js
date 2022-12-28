import Link from "next/link";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";

import styled from "styled-components";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function ResourcesMenu({ anchorEl, open, handleClose }) {
  const { sortedTopics, sortedTypes } = useContext(CategoriesContext);

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
      <Title>Explore by Topic</Title>
      {sortedTopics &&
        sortedTopics.map((category) => {
          return (
            <MenuItem key={category.sys.id} onClick={handleClose}>
              <Link href={`/categories/${category.fields.slug}`}>
                {category.fields.sectionTitle}
              </Link>
            </MenuItem>
          );
        })}
      <Divider />
      <Title>Explore By Support Type</Title>
      {sortedTypes &&
        sortedTypes.map((type) => {
          return (
            <MenuItem key={type.sys.id} onClick={handleClose}>
              <Link
                href={
                  `/categories/${type.fields.slug}` ??
                  type.fields.externalLinkOptional
                }
              >
                {type.fields.supportTypeName}
              </Link>
            </MenuItem>
          );
        })}
    </MenuStyled>
  );
}

const MenuStyled = styled(Menu)`
  margin-top: 1em;
`;

const Title = styled.h3`
  margin-left: 0.5em;
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
