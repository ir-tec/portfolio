import { Grid, Tabs, Tab } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import React from "react";
import { styles } from "../styles/MainStyles";

import { Home, PeopleAlt, Person, Receipt } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const SideBar = ({ sideStatus, width, setSideStatus }) => {
  const [tabIndex, set_tabIndex] = React.useState(0);

  const classes = styles();

  const history = useHistory();

  const handleChange = (event, newValue) => {
    set_tabIndex(newValue);
  };
  return (
    <Drawer
      open={sideStatus}
      variant="temporary"
      anchor="left"
      // className={classes.Drawer}
      classes={{ paper: classes.Drawer }}
      onClose={() => {
        setSideStatus(false);
      }}
    >
      <Grid item container xs={12} alignItems="center">
        <Grid item xs={12} style={{}} container alignItems="flex-start">
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            orientation="vertical"
            variant="scrollable"
            TabIndicatorProps={{
              className: classes.tabIndicator,
            }}
            style={{
              width: "100%",
            }}
          >
            {ProfileListItem.map((item, index) => {
              return (
                <Tab
                  label={item.title}
                  icon={item.icon}
                  key={index}
                  onClick={() => history.push(`/${item.route}`)}
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",

                    textTransform: "capitalize",
                  }}
                  classes={{ wrapper: classes.SideBarTab }}
                />
              );
            })}
          </Tabs>
          ;
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SideBar;

const ProfileListItem = [
  { title: "Dashboard", icon: <Home />, route: "" },
  { title: "Contact Info", icon: <Person />, route: "contact-info" },
  { title: "About Us", icon: <PeopleAlt />, route: "about-me" },
  { title: "Test", icon: <Receipt />, route: "test" },
];
