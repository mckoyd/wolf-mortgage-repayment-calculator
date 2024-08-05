import { Grid } from "@mui/material";
import React from "react";
import { useResultsContainerStyles } from "../styles/resultsContainer.styles";

const ResultsContainer: React.FC = () => {
  const { classes } = useResultsContainerStyles();
  return <Grid container className={classes.resultsItemContainer}></Grid>;
};

export default ResultsContainer;
