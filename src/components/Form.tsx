import React from "react";
import { Grid } from "@mui/material";

import { IFormField } from "../interfaces";
import { formFields } from "../config/form.config";
import { useFormStyles } from "../styles/form.styles";

import FormFieldInput from "./FormFieldInput";
import FormFieldRadioGroup from "./FormFieldRadioGroup";
import CalculateBtn from "./CalculateBtn";

export const Form: React.FC = () => {
  const { classes } = useFormStyles();

  return (
    <Grid container className={classes.formContainer}>
      {formFields.map(
        (
          { label, adornment, orientInputAdornmentRight }: IFormField,
          index
        ) => (
          <FormFieldInput
            label={label}
            adornment={adornment}
            orientInputAdornmentRight={orientInputAdornmentRight}
            key={`${label}-${index}`}
          />
        )
      )}

      <FormFieldRadioGroup />
      <CalculateBtn />
    </Grid>
  );
};

export default Form;
