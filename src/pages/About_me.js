import { Divider, Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { styles } from "../styles/MainStyles";

const AboutMe = ({ width }) => {
  const classes = styles();

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
        xs={11}
        xl={9}
        lg={8}
        md={10}
        container
        justifyContent="space-around"
        alignItems="center"
        style={{ height: "50%" }}
        className={classes.Contactform}
      >
        <Fade in={true} timeout={3000}>
          <Grid item xs={8} container>
            <Divider
              style={{
                width: "100%",
                margin: "10px 0",
                backgroundColor: "black",
              }}
            />
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              style={{ color: "white" }}
            >
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  Amin Hoseyni
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  Iran Hamedan{" "}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  hoseiny_amin@ymail.com
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  +98 990 450 8585
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  October 15 , 2021
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography
                  variant="body1"
                  style={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    fontSize: width > 600 ? 16 : 12,
                  }}
                >
                  Hello, I am Amin
                  <br />
                  I am proud to announce my readiness to start cooperation in
                  developing web, mobile and desktop applications -working with
                  teams or performing by myself.
                  <br />
                  I know that it could be grueling to find the right person for
                  a job, especially when it comes to trusting them to
                  demonstrate your business to the world, Therefore the whole
                  porpuse of this page is to gives you the ability to trust.
                  <br />
                  There are a lot of to cover to be truly able to call yourself
                  a senior in any field ,But once you understand the core
                  concepts and find the right tools, you can travel to Mars over
                  time.
                  <br />
                  I've grasp the concepts, pack the tools and determined the
                  path.
                  <br /> Let's travel together.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;

  return { width };
};
export default connect(mapStateToProps)(AboutMe);
