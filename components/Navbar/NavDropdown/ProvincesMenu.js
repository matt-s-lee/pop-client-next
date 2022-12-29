import styled from "styled-components";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";
import Link from "next/link";

export default function ProvincesMenu({ anchorEl, open, handleClose }) {
  const { provinces } = useContext(CategoriesContext);

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
      {provinces.items.map((province) => {
        return (
          <MenuItem key={province.sys.id} onClick={handleClose}>
            <Link href={`/provinces/${province.fields.slug}`}>
              {province.fields.province}
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
