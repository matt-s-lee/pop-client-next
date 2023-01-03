import { useContext } from "react";
import styled, { css } from "styled-components";

import { CategoriesContext } from "../../../context/CategoriesContext";

import Link from "next/link";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function ResourcesDrawer({
  handleClick, // close original menu
  openResources,
  handleOpenResources, // close nested menu
}) {
  const { sortedTopics, sortedTypes } = useContext(CategoriesContext);
  return (
    <Drawer
      open={openResources}
      anchor="right"
      onClick={(handleClick, handleOpenResources)}
      onClose={(handleClick, handleOpenResources)}
      PaperProps={{
        sx: {
          width: 240,
          elevation: 8,
          padding: 1,
        },
      }}
    >
      <List>
        <CloseDrawer onClick={handleOpenResources}>x</CloseDrawer>
        <Title>Explore by Topic</Title>
        {sortedTopics &&
          sortedTopics.map((category) => {
            return (
              <Link
                key={category.sys.id}
                href={`/categories/${category.fields.slug}`}
              >
                <ListItem onClick={(handleOpenResources, handleClick)}>
                  {category.fields.titleNavBar}
                </ListItem>
              </Link>
            );
          })}
        <Divider />
        <Title>Explore By Support Type</Title>
        {sortedTypes &&
          sortedTypes.map((type) => {
            return (
              <ListItem
                key={type.sys.id}
                onClick={(handleOpenResources, handleClick)}
              >
                <Link
                  href={
                    `/support/${type.fields.slug}` ??
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

export const baseInputStyles = css`
  font-size: 1.5em;
  position: relative;
  left: 7.7em;
`;

const CloseDrawer = styled(ListItem)`
  ${baseInputStyles}
`;
