import { Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormStyles } from "../styles/form.styles";

export const Form: React.FC = () => {
  const { classes, cx } = useFormStyles();
  const [mortgageAmount, setMortgageAmount] = useState<string>("");
  const [term, setTerm] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [monthlyRepayments, setMonthyRepayments] = useState<string>("");

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
    </Grid>
  );
};

export default Form;
