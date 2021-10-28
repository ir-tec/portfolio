import { Grid, Button, IconButton } from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "@material-ui/icons";
import Contract from "../pages/Contract";

const NavBar = ({ width, setSideStatus, scrollToBottom }) => {
  const history = useHistory();

  return (
    <>
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        justifyContent="space-around"
        style={{
          height: 100,

          position: "absolute",
        }}
      >
        <Grid item xs={1} style={{ color: "white" }}>
          <Contract />
        </Grid>
        {width > 960 ? (
          <Grid
            item
            xs={5}
            container
            justifyContent="flex-end"
            style={{ color: "white" }}
          >
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                let p = new Promise((res, rej) => {
                  history.push("/features");
                  res();
                  rej();
                });
                p.then(() => {
                  scrollToBottom();
                });
              }}
            >
              Features
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                history.push("/about-me");
              }}
            >
              About Me
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                history.push("/contact-info");
              }}
            >
              Contant Info
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                history.push("/");
              }}
            >
              Home
            </Button>
          </Grid>
        ) : (
          <Grid item>
            <IconButton onClick={() => setSideStatus(true)}>
              <Menu style={{ color: "white" }} />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </>
  );
};
const mapStateToProps = (props) => {
  const { width, header_route } = props;
  return { width, header_route };
};

export default connect(mapStateToProps)(NavBar);
