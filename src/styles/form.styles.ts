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

  inputAdornment: {
    height: "2.875em",
    maxHeight: "none",
    padding: "0.75em 1em",
    background: theme.palette.common.slate1,
  },
}));
