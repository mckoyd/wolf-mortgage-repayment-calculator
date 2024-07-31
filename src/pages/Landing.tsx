import React from "react";
import { Grid } from "@mui/material";

import { useLandingStyles } from "../styles/landing.styles";

import Header from "../components/Header";

const Landing: React.FC = () => {
  const { classes } = useLandingStyles();

  return (
    <Grid
      container
      direction="column"
      role="main"
      className={classes.mainContainer}
    >
      <Header />
    </Grid>
  );
};

export default Landing;
