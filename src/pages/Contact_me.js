import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Typist from "react-typist";
import { styles } from "../styles/MainStyles";
import "react-typist/dist/Typist.css";

const Contact_me = ({ header_route }) => {
  const classes = styles();
  return (
    <Grid
      item
      container
      xs={12}
      style={{ height: "100vh", color: "white" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        container
        xs={9}
        style={{ height: 400 }}
        justifyContent="space-between"
      >
        {/* ------------------------------------------------------------------------------ title and explation section */}
        <Grid item xs={5}>
          <Typography variant="h3">Today Is The Day</Typography>
          <Typist avgTypingDelay={10}>
            <Typography
              variant="h6"
              style={{ marginTop: 50, display: "inline-flex" }}
            >
              Send Me An Email And I will Contact You As Soon As Possible
            </Typography>
            <Typist.Delay ms={200} />
            <br />
            <Typography variant="h6" style={{ display: "inline" }}>
              Send Me An Email And I will Contact You As Soon As Possible
            </Typography>
          </Typist>
        </Grid>
        {/* --------------------------------------------------------------------------form section */}
        <Grid item xs={5} container className={classes.Contactform}></Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (props) => {
  const { width, header_route } = props;
  return { width, header_route };
};
export default connect(mapStateToProps)(Contact_me);
