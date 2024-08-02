import {
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormStyles } from "../styles/form.styles";

export const Form: React.FC = () => {
  const { classes, cx } = useFormStyles();
  const [mortgageAmount, setMortgageAmount] = useState<string>("");
  const [term, setTerm] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [monthlyRepayments, setMonthyRepayments] = useState<string>("");
  const [type, setType] = useState<string>("repay");

  const handleMortgageAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setMortgageAmount(event.target.value);
  };

  const handleMortgageTermAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTerm(event.target.value);
  };

  const handleInterest = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };

  const handleType = (event: React.ChangeEvent<HTMLElement>) => {
    setType((event.target as HTMLInputElement).value);
  };
  const handleCalculatePaymentsBtn = () => {
    console.log(Number(monthlyRepayments));
  };

  return (
    <Grid container className={classes.formContainer}>
      <Grid item className={classes.formField}>
        <TextField
          label="Mortgage Amount"
          id="mortgage-amount"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                £
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={
            mortgageAmount.length
              ? Number(mortgageAmount.replace(/\D/g, "")).toLocaleString()
              : ""
          }
          onChange={handleMortgageAmount}
          className={classes.formField}
        />
      </Grid>
      <Grid item className={cx(classes.formField, classes.formFieldRight)}>
        <TextField
          label="Mortgage Term"
          id="mortgage-term"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                years
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={term}
          onChange={handleMortgageTermAmount}
          className={classes.formField}
        />
      </Grid>
      <Grid item className={cx(classes.formField, classes.formFieldRight)}>
        <TextField
          label="Interest Rate"
          id="interest-rate"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                %
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={interest}
          onChange={handleInterest}
          className={classes.formField}
        />
      </Grid>
      <Grid item className={cx(classes.formField, classes.formFieldRight)}>
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
    </Grid>
  );
};

export default Form;
