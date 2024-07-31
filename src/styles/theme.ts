import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {}

  interface TypographyVariants {}

  interface TypographyVariantsOptions {}
}

const theme: Theme = createTheme({
  palette: {
    common: {},
  },

  typography: {},
});

export default theme;
