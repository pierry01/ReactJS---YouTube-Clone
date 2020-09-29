import React from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";

import Home from "./Home";

const useStyles = makeStyles({
  root: {},
});

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#F44336",
      },
      secondary: {
        main: "#3F51B5",
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
