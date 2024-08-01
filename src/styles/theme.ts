import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {
    lime: string;
    red: string;
    slate9: string;
    slate7: string;
    slate5: string;
    slate3: string;
    slate1: string;
  }

  interface TypographyVariants {
    preset1: CSSProperties;
    preset2: CSSProperties;
    preset3: CSSProperties;
    preset4: CSSProperties;
    preset5: CSSProperties;
  }
  interface TypographyVariantsOptions {
    preset1?: CSSProperties;
    preset2?: CSSProperties;
    preset3?: CSSProperties;
    preset4?: CSSProperties;
    preset5?: CSSProperties;
  }
}

const lime = "#D8DB2F";
const red = "#D73328";
const slate9 = "#133041";
const slate7 = "#4E6E7E";
const slate5 = "#6B94A8";
const slate3 = "#9ABED5";
export const slate1 = "#E4F4FD";

const theme: Theme = createTheme({
  palette: {
    common: {
      lime,
      red,
      slate9,
      slate7,
      slate5,
      slate3,
      slate1,
    },
  },

  typography: {
    preset1: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "3.5em",
      lineHeight: "125%",
      color: slate9,
      letterSpacing: "-0.0625em",
    },
    preset2: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "1.5em",
      lineHeight: "125%",
      color: slate9,
      letterSpacing: "-0.0625em",
    },
    preset3: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "1.125em",
      lineHeight: "125%",
      color: slate9,
      letterSpacing: "-0.0625em",
    },
    preset4: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 500,
      fontSize: "1em",
      lineHeight: "150%",
      color: slate9,
      letterSpacing: "0",
    },
    preset5: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 500,
      fontSize: "0.875em",
      lineHeight: "150%",
      color: slate9,
      letterSpacing: "0",
    },
  },

  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: slate7,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          fontSize: "1em",
          lineHeight: "150%",
          letterSpacing: "0",
          "&.Mui-focused": {
            color: slate7,
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          border: `0.0625em solid ${slate5}`,
          marginTop: "1.75em !important",
          borderRadius: "0.25em",
          height: "3em",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 700,
          fontSize: "1.125em",
          lineHeight: "125%",
          color: slate9,
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "none",
          },
          "& input": {
            padding: "0 1em !important",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
        },
      },
    },
  },
});

export default theme;
