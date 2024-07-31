import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(({ theme }) => ({
  appContainer: {
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      padding: "2.5em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 2.5em",
      justifyContent: "center",
    },
  },
}));
