import React from "react";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";

import { useResultsContainerStyles } from "../styles/resultsContainer.styles";
import { totalAmountState } from "../state";

import EmptyResultsContainer from "./EmptyResultsContainer";
import CalculatedResultsContainer from "./CalculatedResultsContainer";

const ResultsContainer: React.FC = () => {
  const { classes } = useResultsContainerStyles();

  const totalPayments = useRecoilValue(totalAmountState);

  return (
    <Grid container className={classes.results}>
      {totalPayments === 0 ? (
        <EmptyResultsContainer />
      ) : (
        <CalculatedResultsContainer />
      )}
    </Grid>
  );
};

export default ResultsContainer;
