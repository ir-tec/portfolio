import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import develop_teem from "../img/the-web-developer-team-is-building-a-smartphone-app-in-flat-design-free-vector-removebg-preview.png";
import React from "react";
import { connect } from "react-redux";
import { styles } from "../styles/MainStyles";

const Header = ({ header_route }) => {
  const style = styles();
  return (
    <Grid
      item
      container
      xs={12}
      style={{}}
      alignItems="flex-start"
      justifyContent="center"
      className={style.header_root}
    >
      <Grid
        item
        container
        xs={11}
        alignItems="flex-end"
        justifyContent="space-between"
        style={{ height: "calc(100% - 100px)" }}
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          direction="column"
          xs={12}
          md={5}
          className={style.HeaderContainer}
        >
          <Typography variant="h3" className={style.Header}>
            یادگیری و موفقیت
          </Typography>

          <a
            style={{ textDecoration: "none", color: "white", marginTop: 50 }}
            href="https://github.com/ir-tec"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              endIcon={<GitHub />}
            >
              مشاهده کد ها
            </Button>
          </a>
        </Grid>
        <Grid
          item
          md={7}
          xs={12}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
          style={{ position: "relative", top: 100 }}
        >
          <Hidden xsDown>
            <img src={develop_teem} alt="" className={style.developers} />
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (props) => {
  const { width, header_route } = props;
  return { width, header_route };
};
export default connect(mapStateToProps)(Header);
