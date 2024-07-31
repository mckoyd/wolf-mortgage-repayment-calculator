import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useClearAllBtnStyles = tss.create(({ theme }) => ({
  clearAllBtn: {
    padding: 0,
    justifyContent: "flex-start",
  },
  clearAllBtnText: {
    ...(theme.typography.preset4 as CSSProperties),
    color: theme.palette.common.slate7,
    textTransform: "none",
    textDecoration: "underline",
  },
}));
