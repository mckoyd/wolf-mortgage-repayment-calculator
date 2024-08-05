import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { mortgageTypeState } from "../state";
import { useFormFieldRadioGroupStyles } from "../styles/formFieldRadioGroup.styles";

const FormFieldRadioGroup: React.FC = () => {
  const { classes } = useFormFieldRadioGroupStyles();
  const [type, setType] = useRecoilState<string>(mortgageTypeState);

  const handleType = (event: React.ChangeEvent<HTMLElement>) => {
    setType(
      (event.target as HTMLInputElement).value as "" | "repay" | "interest"
    );
  };

  return (
    <Grid item className={classes.formField}>
      <FormLabel id="mortgage-type">
        <Typography
          component={"span"}
          className={classes.formFieldText}
          fontSize={"0.75rem !important"}
        >
          Mortgage Type
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={type}
        onChange={handleType}
        className={classes.formRadioGroup}
      >
        <FormControlLabel
          checked={type === "repay"}
          value="repay"
          control={<Radio className={classes.formRadioBtn} />}
          label="Repayment"
          className={
            type === "repay"
              ? classes.formRadioLabelSelected
              : classes.formRadioLabel
          }
        />
        <FormControlLabel
          checked={type === "interest"}
          value="interest"
          control={<Radio className={classes.formRadioBtn} />}
          label="Interest Only"
          className={
            type === "interest"
              ? classes.formRadioLabelSelected
              : classes.formRadioLabel
          }
        />
      </RadioGroup>
    </Grid>
  );
};

export default FormFieldRadioGroup;
