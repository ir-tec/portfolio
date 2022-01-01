import { Grid } from "@material-ui/core";
import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, useHistory } from "react-router-dom";
import ReachTable from "./Features/ReachTable";
import { CSSTransition } from "react-transition-group";

import { feature_style } from "../styles/feature_style";
import Market from "./Features/Market";
import Plan from "./Features/Plan";
import Lists from "./Features/Lists";
import Media from "./Features/Media";
import { connect } from "react-redux";
const Features = ({ width }) => {
  let history = useHistory();
  const [value, setValue] = React.useState("/courses");

  const style = feature_style();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12} container className={style.root} id="courses">
      <Grid item container xs={11} className={style.feature_container}>
        {/* ------------------------------------------------------------------------------------------------------- Tabs Section */}
        <Grid item xs={12} style={{ height: 50 }}>
          <AppBar
            elevation={1}
            position="static"
            style={{
              backgroundColor: "inherit",
              justifyContent: "flex-end",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              style={{
                width: width > 960 ? "100%" : "95%",
              }}
              variant="scrollable"
              scrollButtons="on"
            >
              {feature_routes.map((item, i) => (
                <Tab
                  label={item.label}
                  value={item.path}
                  key={i}
                  onClick={() => history.push(item.path)}
                />
              ))}
            </Tabs>
          </AppBar>
        </Grid>

        {/* ------------------------------------------------------------------------------------------------------- Routes Section */}
        <Grid item container xs={12} style={{ height: "calc(100% - 70px)" }}>
          {feature_routes.map((item, i) => {
            return (
              <Route key={i} exact path={item.path}>
                {({ match }) => {
                  return (
                    <CSSTransition
                      in={match !== null}
                      timeout={500}
                      classNames={{
                        enter: style.route_inter,
                        enterActive: style.route_inter_active,
                        exit: style.route_exit,
                        exitActive: style.route_exit_active,
                      }}
                      unmountOnExit
                    >
                      <item.comp />
                    </CSSTransition>
                  );
                }}
              </Route>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;
  return { width };
};

export default connect(mapStateToProps)(Features);

let feature_routes = [
  { path: "/courses", label: "check The market", comp: Market },
  { path: "/courses/plan", label: "make a plan", comp: Plan },
  { path: "/courses/todos", label: "Cool Todos", comp: Lists },
  { path: "/courses/table", label: "reach tables", comp: ReachTable },
  { path: "/courses/media", label: "Media", comp: Media },
];
