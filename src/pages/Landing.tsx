import React from "react";
import { Grid } from "@mui/material";

import { useLandingStyles } from "../styles/landing.styles";

import Header from "../components/Header";
import Form from "../components/Form";

const Landing: React.FC = () => {
  const { classes } = useLandingStyles();

  return (
    <Grid
      container
      direction="column"
      role="main"
      className={classes.mainContainer}
    >
      <Grid item className={classes.formItemContainer}>
        <Header />
        <Form />
      </Grid>
      <Grid item className={classes.resultsItemContainer}></Grid>
    </Grid>
  );
};

export default Landing;
