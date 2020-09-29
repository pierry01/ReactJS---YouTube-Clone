import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "red",
    height: "100vh",
  },
});

const Home = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Home;
