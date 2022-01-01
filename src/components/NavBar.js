import { Grid, Button, IconButton, Hidden } from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Home } from "@material-ui/icons";
import Contract from "../pages/Contract";
import { Scrollchor } from "react-scrollchor";
const NavBar = ({ width, setSideStatus }) => {
  const history = useHistory();

  return (
    <>
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        justifyContent="center"
        style={{
          height: 100,
          position: "absolute",
        }}
      >
        <Grid
          item
          xs={11}
          direction="row-reverse"
          justifyContent="space-between"
          alignItems="center"
          container
        >
          <Grid item style={{ color: "white" }}>
            <Contract />
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              xs={5}
              container
              justifyContent="flex-start"
              style={{ color: "white" }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  history.push("#home");
                }}
              >
                صفحه اصلی
              </Button>
              {routes.map((item, i) => {
                return (
                  <Button key={i} variant="text" color="secondary">
                    <Scrollchor
                      to={item.route}
                      onClick={() =>
                        new Promise((res, rej) => {
                          history.push("/");
                          res();
                          rej();
                        }).then(() => {
                          history.push(`#${item.route}`);
                        })
                      }
                      style={{ textDecoration: "none", color: "inherit" }}
                      animate={{}}
                    >
                      {item.title}
                    </Scrollchor>
                  </Button>
                );
              })}
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid item>
              <IconButton onClick={() => setSideStatus(true)}>
                <Home color="secondary" fontSize="large" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (props) => {
  const { width, header_route } = props;
  return { width, header_route };
};

export default connect(mapStateToProps)(NavBar);

const routes = [
  { title: "آموزش", route: "courses" },
  { title: "همکاری", route: "cooperation" },
  { title: "تماس با ما", route: "contant" },
];
