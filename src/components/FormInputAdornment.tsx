import { InputAdornment } from "@mui/material";
import React from "react";
import { useFormInputAdornmentStyles } from "../styles/formInputAdornment.styles";

const FormInputAdornment: React.FC<{
  changeToFocusBg: boolean;
  adornment: string;
}> = ({ changeToFocusBg, adornment }) => {
  const { classes } = useFormInputAdornmentStyles();

  return (
    <InputAdornment
      position={adornment === "£" ? "start" : "end"}
      className={
        changeToFocusBg ? classes.focusedInputAdornment : classes.inputAdornment
      }
    >
      {adornment}
    </InputAdornment>
  );
};

export default FormInputAdornment;
