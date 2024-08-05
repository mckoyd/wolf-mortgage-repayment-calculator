import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Grid, TextField } from "@mui/material";

import {
  mortgageAmountState,
  mortgageTermState,
  mortgateInterestState,
} from "../state";
import { useFormFieldInputStyles } from "../styles/formFieldInput.styles";
import {
  decorateCurrencyValue,
  formErrorText,
  generateFormIdFromLabel,
} from "../config/form.config";

import FormInputAdornment from "./FormInputAdornment";

const FormFieldInput: React.FC<{
  label: string;
  adornment: string;
  orientInputAdornmentRight: boolean;
}> = ({ label, adornment, orientInputAdornmentRight }) => {
  const { classes, cx } = useFormFieldInputStyles();

  const [mortgageAmount, setMortgageAmount] =
    useRecoilState<string>(mortgageAmountState);
  const [term, setTerm] = useRecoilState<string>(mortgageTermState);
  const [interest, setInterest] = useRecoilState<string>(mortgateInterestState);

  const [errorMessage, setErrorMessageText] = useState<string | undefined>();
  const [changeToFocusBg, setChangeToFocusBg] = useState(false);

  const formInputProps = {
    startAdornment: (
      <FormInputAdornment
        changeToFocusBg={changeToFocusBg}
        adornment={adornment}
      />
    ),
  };

  const handleFormFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    switch (event.target.name) {
      case "Mortgage Amount":
        setChangeToFocusBg(true);
        setMortgageAmount(event.target.value);
        break;
      case "Mortgage Term":
        setTerm(event.target.value);
        break;
      case "Interest Rate":
        setInterest(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleBlur = () => {
    setChangeToFocusBg(false);
    switch (label) {
      case "Mortgage Amount":
        if (mortgageAmount === "") setErrorMessageText(formErrorText);
        break;
      case "Mortgage Term":
        if (term === "") setErrorMessageText(formErrorText);
        break;
      case "Interest Rate":
        if (interest === "") setErrorMessageText(formErrorText);
        break;
      default:
        setErrorMessageText(undefined);
    }
  };

  const handleFocus = () => {
    setErrorMessageText(undefined);
  };

  const getValue = () => {
    switch (label) {
      case "Mortgage Amount":
        return decorateCurrencyValue(mortgageAmount);
      case "Mortgage Term":
        return term;
      case "Interest Rate":
        return interest;
      default:
        return "";
    }
  };

  return (
    <Grid
      item
      className={cx(
        classes.formField,
        orientInputAdornmentRight ? classes.formFieldRight : ""
      )}
    >
      <TextField
        label={label}
        name={label}
        id={generateFormIdFromLabel(label)}
        error={errorMessage !== undefined}
        helperText={errorMessage}
        onFocus={handleFocus}
        onBlur={handleBlur}
        InputProps={formInputProps}
        variant="standard"
        value={getValue()}
        onChange={handleFormFieldChange}
        className={classes.formField}
      />
    </Grid>
  );
};

export default FormFieldInput;
