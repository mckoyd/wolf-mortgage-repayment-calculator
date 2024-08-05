import { Button, Typography } from "@mui/material";
import React from "react";
import { clearAllBtnText } from "../config/header.config";
import { useClearAllBtnStyles } from "../styles/clearAllBtn.styles";
import { useSetRecoilState } from "recoil";
import {
  mortgageAmountState,
  mortgageTermState,
  mortgageTypeState,
  mortgateInterestState,
} from "../state";

const ClearAllBtn: React.FC = () => {
  const { classes } = useClearAllBtnStyles();

  const setMortgageAmount = useSetRecoilState(mortgageAmountState);
  const setMortgageInterest = useSetRecoilState(mortgateInterestState);
  const setMortgageType = useSetRecoilState(mortgageTypeState);
  const setMortgageTerm = useSetRecoilState(mortgageTermState);

  const handleClearAllBtn = () => {
    console.log("clearAllBtn clicked");
    setMortgageAmount("");
    setMortgageInterest("");
    setMortgageType("");
    setMortgageTerm("");
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
