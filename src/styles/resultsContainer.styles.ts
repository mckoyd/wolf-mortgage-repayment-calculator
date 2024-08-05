import { tss } from "tss-react/mui";

export const useResultsContainerStyles = tss.create(({ theme }) => ({
  resultsItemContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
