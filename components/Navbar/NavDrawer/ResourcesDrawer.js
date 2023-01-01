import { useContext } from "react";
import styled from "styled-components";

import { CategoriesContext } from "../../../context/CategoriesContext";

import Link from "next/link";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function ResourcesDrawer({
  handleClick, // close original menu
  drawerOpen,
  handleOpen, // close nested menu
}) {
  const { sortedTopics, sortedTypes } = useContext(CategoriesContext);

  return (
    <Drawer
      open={drawerOpen}
      anchor="right"
      onClick={handleOpen}
      onClose={handleOpen}
    >
      <List>
        <ListItem onClick={handleOpen}>x</ListItem>
        <Title>Explore by Topic</Title>
        {sortedTopics &&
          sortedTopics.map((category) => {
            return (
              <ListItem
                key={category.sys.id}
                onClick={(handleOpen, handleClick)}
              >
                <Link href={`/categories/${category.fields.slug}`}>
                  {category.fields.sectionTitle}
                </Link>
              </ListItem>
            );
          })}
        <Divider />
        <Title>Explore By Support Type</Title>
        {sortedTypes &&
          sortedTypes.map((type) => {
            return (
              <ListItem key={type.sys.id} onClick={handleOpen}>
                <Link
                  href={
                    `/categories/${type.fields.slug}` ??
                    type.fields.externalLinkOptional
                  }
                >
                  {type.fields.supportTypeName}
                </Link>
              </ListItem>
            );
          })}
      </List>
    </Drawer>
  );
}

const Title = styled.h3`
  margin-left: 0.5em;
`;
