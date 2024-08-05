import React from "react";

import { Grid, Typography } from "@mui/material";

import { ReactComponent as EmptyCalculator } from "../assets/images/illustration-empty.svg";
import { useEmptyResultsContainer } from "../styles/emptyResultsContainer.styles";

const EmptyResultsContainer: React.FC = () => {
  const { classes } = useEmptyResultsContainer();

  return (
    <Grid item container className={classes.emptyResultsContainer}>
      <Grid item>
        <EmptyCalculator />
      </Grid>
      <Typography className={classes.emptyResultsTitle}>
        Results shown here
      </Typography>
      <Typography className={classes.emptyResultsSubtitle}>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </Typography>
    </Grid>
  );
};

export default EmptyResultsContainer;
