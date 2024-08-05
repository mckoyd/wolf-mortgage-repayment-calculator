import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useCalculateBtnStyles = tss.create(({ theme }) => ({
  calculateBtnContainer: {
    width: "100%",
  },
  calculateBtn: {
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.common.lime,
    borderRadius: "62.4375em",
    gap: "0.75em",
    padding: "1em 2.5em",
    "&:hover": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #D8DB2F",
    },
  },
  calculatorIcon: {
    width: "1.5em",
    height: "1.5em",
  },
  calculateBtnText: {
    ...(theme.typography.preset3 as CSSProperties),
    letterSpacing: 0,
  },
}));
