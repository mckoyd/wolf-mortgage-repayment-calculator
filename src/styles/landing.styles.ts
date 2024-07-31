import { tss } from "tss-react/mui";

export const useLandingStyles = tss.create(({ theme }) => ({
  mainContainer: {
    padding: "2em 1.5em",
    gap: "2em",
    background: theme.palette.common.white,

    [theme.breakpoints.up("sm")]: {},
  },
}));
