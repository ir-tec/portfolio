import { Fade, Grid, Typography } from "@material-ui/core";
import React from "react";

const AboutMe = () => {
  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid
        item
        xs={12}
        container
        justifyContent="space-around"
        alignItems="center"
        style={{ height: "50%", alignSelf: "flex-start" }}
      >
        <Fade in={true} timeout={3000}>
          <Grid item xs={6}>
            <Typography variant="h4" color="secondary">
              Hi I'm AMIN
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
