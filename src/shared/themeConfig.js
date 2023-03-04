import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";
export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },

  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#f2f2f2",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: { borderRadius: 18 },
        },
      ],
    },
  },
});
