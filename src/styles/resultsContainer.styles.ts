import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useResultsContainerStyles = tss.create(({ theme }) => ({
  results: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    background: theme.palette.common.slate9,
    justifyContent: "center",
    alignItems: "center",
    padding: "2em 1.5em",
    gap: "1.5em",
  },

  emptyResultsTitle: {
    ...(theme.typography.preset2 as CSSProperties),
    color: theme.palette.common.white,
    textAlign: "center",
    letterSpacing: 0,
  },
  emptyResultsSubtitle: {
    ...(theme.typography.preset4 as CSSProperties),
    color: theme.palette.common.slate3,
    textAlign: "center",
  },
}));
