import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#ffc400",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "vazir",
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: "capitalize",
      },
    },
    MuiButton: {
      label: {
        textTransform: "capitalize",
      },
    },
  },
});
