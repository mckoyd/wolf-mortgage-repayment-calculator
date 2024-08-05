import { tss } from "tss-react/mui";

export const useFormFieldInputStyles = tss.create(({ theme }) => ({
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
  inputAdornment: {
    height: "2.875em",
    maxHeight: "none",
    padding: "0.75em 1em",
    background: theme.palette.common.slate1,
  },
  formFieldRight: {
    "& .MuiInput-root": {
      flexDirection: "row-reverse",
    },
  },
  focusedInputAdornment: {
    background: `${theme.palette.common.lime} !important`,
    color: theme.palette.common.slate9,
    height: "2.875em",
    maxHeight: "none",
    padding: "0.75em 1em",
  },
}));
