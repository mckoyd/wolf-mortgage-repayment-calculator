import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useFormStyles = tss.create(({ theme }) => ({
  formContainer: {
    gap: "1.5em",
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: "0.75em",
    width: "100%",
    fontSize: "1rem",
    "& .MuiInput-root:hover:not(.Mui-focused)": {
      border: "1px solid #133041",
    },
  },

  formFieldRight: {
    "& .MuiInput-root": {
      flexDirection: "row-reverse",
    },
  },

  formFieldText: {
    ...(theme.typography.preset4 as CSSProperties),
    color: theme.palette.common.slate7,
  },

  formRadioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75em",
    "& .MuiFormControlLabel-label": {
      ...(theme.typography.preset3 as CSSProperties),
      letterSpacing: 0,
      fontSize: "0.875rem",
    },
  },

  formRadioLabel: {
    border: "1px solid #6B94A8",
    borderRadius: "0.25em",
    margin: 0,
  },

  formRadioLabelSelected: {
    border: "1px solid #D8DB2F",
    borderRadius: "0.25em",
    background: "rgba(216, 219, 47, 0.15)",
    margin: 0,
  },

  formRadioBtn: {
    color: theme.palette.common.slate5,
    "&.Mui-checked": {
      color: theme.palette.common.lime,
    },
  },

  inputAdornment: {
    height: "2.875em",
    maxHeight: "none",
    padding: "0.75em 1em",
    background: theme.palette.common.slate1,
  },

  focusedInputAdornment: {
    background: `${theme.palette.common.lime} !important`,
    color: theme.palette.common.slate9,
    height: "2.875em",
    maxHeight: "none",
    padding: "0.75em 1em",
  },
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
