import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useCalculatedResultsContainerStyles } from "../styles/calculatedResultsContainer.styles";
import { useRecoilValue } from "recoil";
import {
  interestPaymentsState,
  monthlyRepaymentsState,
  totalAmountState,
} from "../state";

const CalculatedResultsContainer: React.FC = () => {
  const { classes } = useCalculatedResultsContainerStyles();

  const monthlyRepayments = useRecoilValue(monthlyRepaymentsState);
  const interestPayments = useRecoilValue(interestPaymentsState);
  const totalPayments = useRecoilValue(totalAmountState);

  return (
    <Grid item container className={classes.calculatedResultsContainer}>
      <Typography className={classes.calculatedResultsTitle}>
        Your results
      </Typography>
      <Typography className={classes.calculatedResultsSubtitle}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </Typography>
      <Grid
        container
        direction={"column"}
        className={classes.calculatedResults}
      >
        <Typography className={classes.repaymentsTitle}>
          Your {monthlyRepayments !== 0 ? "monthly" : "interest"} repayments
        </Typography>
        <Typography className={classes.repayments}>
          {monthlyRepayments !== 0
            ? `£${monthlyRepayments.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : `£${interestPayments.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.repaymentsTitle}>
          Total you'll repay over the term
        </Typography>
        <Typography className={classes.repaymentsTotal}>
          {`£${totalPayments.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CalculatedResultsContainer;
