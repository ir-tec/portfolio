import { Grid, Typography, Button } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

import React from "react";
import { connect } from "react-redux";

const Header = ({ header_route }) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ height: "100vh", color: "white" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={8} container direction="column" alignItems="center">
        <Typography variant="h2" style={{ fontWeight: "3000" }}>
          Make It Special
        </Typography>
        <a
          style={{ textDecoration: "none", color: "white", marginTop: 50 }}
          href="https://github.com/ir-tec"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button variant="contained" color="primary" startIcon={<GitHub />}>
            Whach Me
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (props) => {
  const { width, header_route } = props;
  return { width, header_route };
};
export default connect(mapStateToProps)(Header);
