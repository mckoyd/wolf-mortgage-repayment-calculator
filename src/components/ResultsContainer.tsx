import { Grid, Typography } from "@mui/material";
import React from "react";
import { useResultsContainerStyles } from "../styles/resultsContainer.styles";
import { ReactComponent as EmptyCalculator } from "../assets/images/illustration-empty.svg";

const ResultsContainer: React.FC = () => {
  const { classes } = useResultsContainerStyles();
  return (
    <Grid container className={classes.results}>
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

export default ResultsContainer;
