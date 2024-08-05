import { IFormField } from "../interfaces";

export const formFields: IFormField[] = [
  {
    label: "Mortgage Amount",
    adornment: "£",
    orientInputAdornmentRight: false,
  },
  {
    label: "Mortgage Term",
    adornment: "years",
    orientInputAdornmentRight: true,
  },
  {
    label: "Interest Rate",
    adornment: "%",
    orientInputAdornmentRight: true,
  },
];

export const formErrorText = "This field is required";

export const decorateCurrencyValue = (value: string) =>
  value.length ? Number(value.replace(/\D/g, "")).toLocaleString() : "";

export const generateFormIdFromLabel = (label: string) =>
  label.toLowerCase().replace(" ", "-");
