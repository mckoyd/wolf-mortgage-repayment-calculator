import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  headerItemContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
    alignItems: "flex-start",
    padding: 0,
  },
  headerText: {
    ...(theme.typography.preset2 as CSSProperties),
  },
}));
