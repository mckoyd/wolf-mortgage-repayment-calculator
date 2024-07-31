import React from "react";

import { Button, Grid, Typography } from "@mui/material";

import { useHeaderStyles } from "../styles/header.styles";
import { title } from "../config/header.config";
import ClearAllBtn from "./ClearAllBtn";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();

  return (
    <Grid container className={classes.headerContainer}>
      <Typography className={classes.headerText}>{title}</Typography>
      <ClearAllBtn />
    </Grid>
  );
};

export default Header;
