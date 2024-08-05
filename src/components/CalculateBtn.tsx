import { Button, Grid, Typography } from "@mui/material";
import React from "react";

import { ReactComponent as CalculatorIcon } from "../assets/images/icon-calculator.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  monthlyRepaymentsState,
  mortgageAmountState,
  mortgageTermState,
  mortgageTypeState,
  mortgateInterestState,
  totalAmountState,
} from "../state";
import { useCalculateBtnStyles } from "../styles/calculateBtn.styles";

const CalculateBtn: React.FC = () => {
  const { classes } = useCalculateBtnStyles();

  const term = useRecoilValue(mortgageTermState);
  const interest = useRecoilValue(mortgateInterestState);
  const type = useRecoilValue(mortgageTypeState);
  const mortgageAmount = useRecoilValue(mortgageAmountState);

  const setMonthlyRepayments = useSetRecoilState(monthlyRepaymentsState);
  const setTotalAmountToBePaid = useSetRecoilState(totalAmountState);

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
    setMonthlyRepayments(monthlyAmount);

    const totalPayments = monthlyAmount * totalNumberOfPayments;
    setTotalAmountToBePaid(totalPayments);
  };

  return (
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
  );
};

export default CalculateBtn;
