import { atom } from "recoil";

export const mortgageAmountState = atom({
  key: "mortgageAmountStateKey",
  default: "",
});

export const mortgageTermState = atom({
  key: "mortgageTermStateKey",
  default: "",
});

export const mortgateInterestState = atom({
  key: "mortgageInterestStateKey",
  default: "",
});

export const mortgageTypeState = atom({
  key: "mortgageTypeState",
  default: "" as "" | "repay" | "interest",
});

export const monthlyRepaymentsState = atom({
  key: "monthlyRepaymentsStateKey",
  default: 0,
});

export const totalAmountState = atom({
  key: "totalAmountStateKey",
  default: 0,
});

export const interestPaymentsState = atom({
  key: "interestPaymentsState",
  default: 0,
});
