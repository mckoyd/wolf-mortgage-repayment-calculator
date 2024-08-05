import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useFormFieldRadioGroupStyles = tss.create(({ theme }) => ({
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
}));
