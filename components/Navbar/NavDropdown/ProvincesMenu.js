import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";

import styled from "styled-components";
import { theme } from "../../../styles/font";

import Link from "next/link";
import { useRouter } from "next/router";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ProvincesMenu({ anchorEl, open, handleClose }) {
  const [sortedProvinces, setSortedProvinces] = useState();
  const { provinces } = useContext(CategoriesContext);
  const router = useRouter();
  const { locale } = router;

  function compare(a, b) {
    if (a.fields.orderNumber[locale] < b.fields.orderNumber[locale]) {
      return -1;
    }
    if (a.fields.orderNumber[locale] > b.fields.orderNumber[locale]) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    provinces && setSortedProvinces([...provinces.items].sort(compare));
  }, [provinces, locale]);

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
      {sortedProvinces &&
        sortedProvinces.map((province) => {
          return (
            <Link
              key={province.sys.id}
              href={`/provinces/${province.fields.slug[locale]}`}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {province.fields.province[locale]}
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
