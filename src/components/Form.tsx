import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { ReactComponent as CalculatorIcon } from "../assets/images/icon-calculator.svg";
import { useFormStyles } from "../styles/form.styles";
import { useRecoilState } from "recoil";
import {
  monthlyRepaymentsState,
  mortgageAmountState,
  mortgageTermState,
  mortgageTypeState,
  mortgateInterestState,
  totalAmountState,
} from "../state";
import { formErrorText } from "../config/form.config";

export const Form: React.FC = () => {
  const { classes, cx } = useFormStyles();
  const [mortgageAmount, setMortgageAmount] =
    useRecoilState<string>(mortgageAmountState);
  const [mortgageAmountError, setMortgageAmountError] = useState<
    string | undefined
  >();
  const [term, setTerm] = useRecoilState<string>(mortgageTermState);
  const [interest, setInterest] = useRecoilState<string>(mortgateInterestState);
  const [monthlyRepayments, setMonthyRepayments] = useRecoilState<number>(
    monthlyRepaymentsState
  );
  const [totalAmountToBePaid, setTotalAmountToBePaid] =
    useRecoilState(totalAmountState);
  const [type, setType] = useRecoilState<"" | "repay" | "interest">(
    mortgageTypeState
  );
  const [changeToFocusBg, setChangeToFocusBg] = useState(false);

  const handleMortgageAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setChangeToFocusBg(true);

    setMortgageAmount(event.target.value);
  };

  const handleMortgageTermAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setTerm(event.target.value);
  };

  const handleInterest = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInterest(event.target.value);
  };

  const handleType = (event: React.ChangeEvent<HTMLElement>) => {
    setType(
      (event.target as HTMLInputElement).value as "" | "repay" | "interest"
    );
  };

  const handleCalculatePaymentsBtn = () => {
    const currentTerm = Number(term);

    const principalAmount = parseFloat(mortgageAmount.replace(",", ""));
    const rate = Number(interest) / 100;
    const mortgageType = type;

    const annualRate = rate / 12;

    const totalNumberOfPayments = currentTerm * 12;

    const monthlyAmount =
      mortgageType === "repay"
        ? (principalAmount *
            annualRate *
            Math.pow(1 + annualRate, totalNumberOfPayments)) /
          (Math.pow(1 + annualRate, totalNumberOfPayments) - 1)
        : principalAmount * annualRate;
    setMonthyRepayments(monthlyAmount);

    const totalPayments = monthlyAmount * totalNumberOfPayments;
    setTotalAmountToBePaid(totalPayments);
  };

  return (
    <Grid container className={classes.formContainer}>
      <Grid item className={classes.formField}>
        <TextField
          label="Mortgage Amount"
          id="mortgage-amount"
          error={mortgageAmountError !== undefined}
          helperText={mortgageAmountError}
          onFocus={() => {
            setMortgageAmountError(undefined);
          }}
          onBlur={() => {
            setChangeToFocusBg(false);

            if (mortgageAmount === "") {
              setMortgageAmountError(formErrorText);
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={
                  changeToFocusBg
                    ? classes.focusedInputAdornment
                    : classes.inputAdornment
                }
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
      <Grid item className={classes.calculateBtnContainer}>
        <Button
          className={classes.calculateBtn}
          fullWidth
          onClick={handleCalculatePaymentsBtn}
        >
          <CalculatorIcon className={classes.calculatorIcon} />
          <Typography component={"span"} className={classes.calculateBtnText}>
            Calculate Repayments
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
