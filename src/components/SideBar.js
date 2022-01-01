import { Grid, Tabs, Tab, IconButton } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import React from "react";
import { styles } from "../styles/MainStyles";
import Logo from "../img/code.svg";
import {
  Home,
  Info,
  ContactMail,
  FeaturedPlayList,
  KeyboardArrowLeft,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const SideBar = ({ sideStatus, setSideStatus }) => {
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
      classes={{ paper: classes.Drawer }}
      onClose={() => {
        setSideStatus(false);
      }}
    >
      <Grid
        item
        container
        xs={12}
        spacing={5}
        style={{ margin: "auto" }}
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <img src={Logo} alt="" width={50} height={50} />
          <IconButton onClick={() => setSideStatus(false)}>
            <KeyboardArrowLeft style={{ color: "white" }} fontSize="large" />
          </IconButton>
        </Grid>
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
              padding: 0,
            }}
          >
            {ProfileListItem.map((item, index) => {
              return (
                <Tab
                  label={item.title}
                  icon={item.icon}
                  key={index}
                  onClick={() => {
                    history.push(`/${item.route}`);
                    setSideStatus(false);
                  }}
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "normal",
                    padding: 0,
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
  { title: "Home", icon: <Home style={{ marginRight: 8 }} />, route: "" },
  {
    title: "Contact Info",
    icon: <ContactMail style={{ marginRight: 8 }} />,
    route: "contact-info",
  },
  {
    title: "About me",
    icon: <Info style={{ marginRight: 8 }} />,
    route: "about-me",
  },
  {
    title: "Features",
    icon: <FeaturedPlayList style={{ marginRight: 8 }} />,
    route: "features",
  },
];
