import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useCalculatedResultsContainerStyles = tss.create(({ theme }) => ({
  calculatedResultsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  calculatedResultsTitle: {
    ...(theme.typography.preset2 as CSSProperties),
    color: theme.palette.common.white,
    letterSpacing: 0,
  },
  calculatedResultsSubtitle: {
    ...(theme.typography.preset4 as CSSProperties),
    color: theme.palette.common.slate3,
  },
  calculatedResults: {
    background: "rgba(0, 0, 0, 0.25)",
    borderTop: "4px solid #D8DB2F",
    borderRadius: "0.5em",
    gap: "1em",
    padding: "1.5em 1em",
    alignItems: "flex-start",
  },
  repaymentsTitle: {
    ...(theme.typography.preset4 as CSSProperties),
    color: theme.palette.common.slate3,
  },
  repayments: {
    ...(theme.typography.preset1 as CSSProperties),
    color: theme.palette.common.lime,
    letterSpacing: 0,
  },
  repaymentsTotal: {
    ...(theme.typography.preset2 as CSSProperties),
    color: theme.palette.common.white,
    letterSpacing: 0,
  },
  divider: {
    borderColor: "rgba(154, 190, 213, 0.25)",
    width: "100%",
  },
}));
