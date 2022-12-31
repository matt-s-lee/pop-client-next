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
      {provinces &&
        provinces.items.map((province) => {
          return (
            <Link
              key={province.sys.id}
              href={`/provinces/${province.fields.slug}`}
            >
              <MenuItem onClick={handleClose}>
                {province.fields.province}
              </MenuItem>
            </Link>
          );
        })}
    </MenuStyled>
  );
}

const MenuStyled = styled(Menu)`
  margin-top: 1em;
`;
