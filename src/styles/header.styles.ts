import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  headerContainer: {
    flexDirection: "column",
    gap: "0.5em",
    alignItems: "flex-start",
    padding: 0,

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2em",
    },
  },
  headerText: {
    ...(theme.typography.preset2 as CSSProperties),
  },
}));
