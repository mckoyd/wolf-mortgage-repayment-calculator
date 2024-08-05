import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useEmptyResultsContainer = tss.create(({ theme }) => ({
  emptyResultsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
    justifyContent: "center",
    alignItems: "center",
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
