import { tss } from "tss-react/mui";

export const useFormInputAdornmentStyles = tss.create(({ theme }) => ({
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
}));
