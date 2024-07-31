import { tss } from "tss-react/mui";

export const useLandingStyles = tss.create(({ theme }) => ({
  mainContainer: {
    padding: "2em 1.5em",
    gap: "2em",
    background: theme.palette.common.white,

    [theme.breakpoints.up("sm")]: {
      boxShadow: "0 2em 4em rgba(19, 48, 65, 0.1)",
      borderRadius: "1.5em",
      padding: "2.5em",
      gap: "2.5em",
    },

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },

  formItemContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  resultsItemContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
