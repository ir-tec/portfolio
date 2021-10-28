import { Backdrop, Grid } from "@material-ui/core";
import React from "react";
import { styles } from "../styles/MainStyles";

const Features = () => {
  const classes = styles();

  return (
    <Grid
      item
      xs={12}
      container
      style={{
        height: "100vh",
        backgroundRepeat: "round",
        transform: "scaleY(-1)",
        color: "white",
      }}
      className={classes.LayoutChildren}
    >
      <Grid item xs={12} container style={{ height: "100%" }}></Grid>
      <Backdrop in={true} open={true} />
    </Grid>
  );
};

export default Features;
