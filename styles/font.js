import { Libre_Franklin, Overpass } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const libre = Libre_Franklin({ subsets: ["latin"] });
export const overpass = Overpass({ subsets: ["latin"] });

export const theme = createTheme({
  typography: {
    fontFamily: libre.style.fontFamily,
    body1: {
      fontFamily: overpass.style.fontFamily,
    },
  },
});
