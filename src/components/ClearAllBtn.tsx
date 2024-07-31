import { Button, Typography } from "@mui/material";
import React from "react";
import { clearAllBtnText } from "../config/header.config";
import { useClearAllBtnStyles } from "../styles/clearAllBtn.styles";

const ClearAllBtn: React.FC = () => {
  const { classes } = useClearAllBtnStyles();

  const handleClearAllBtn = () => {
    console.log("clearAllBtn clicked");
  };

  return (
    <Button className={classes.clearAllBtn} onClick={handleClearAllBtn}>
      <Typography component="span" className={classes.clearAllBtnText}>
        {clearAllBtnText}
      </Typography>
    </Button>
  );
};

export default ClearAllBtn;
