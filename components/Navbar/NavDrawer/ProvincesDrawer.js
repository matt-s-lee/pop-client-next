import { useContext } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";

import styled, { css } from "styled-components";
import { baseInputStyles } from "./ResourcesDrawer";

import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { RiCloseFill } from "react-icons/ri";

export default function ProvincesDrawer({
  handleClick, // close original menu
  openProvinces,
  handleOpenProvinces, // close nested menu
}) {
  const { provinces } = useContext(CategoriesContext);
  return (
    <Drawer
      open={openProvinces}
      anchor="right"
      onClick={(handleClick, handleOpenProvinces)}
      onClose={(handleClick, handleOpenProvinces)}
      PaperProps={{
        sx: {
          width: 240,
          elevation: 8,
          padding: 1,
        },
      }}
    >
      <List>
        <CloseDrawer onClick={handleOpenProvinces}>
          <RiCloseFill />
        </CloseDrawer>
        {provinces &&
          provinces.items.map((province) => {
            return (
              <Link
                key={province.sys.id}
                href={`/provinces/${province.fields.slug}`}
                onClick={(handleOpenProvinces, handleClick)}
              >
                <ListItem>{province.fields.province}</ListItem>
              </Link>
            );
          })}
      </List>
    </Drawer>
  );
}

const CloseDrawer = styled(ListItem)`
  ${baseInputStyles}
`;
