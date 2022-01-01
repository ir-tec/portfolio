import { makeStyles } from "@material-ui/core";
import baner from "../img/banner.png";

export const styles = makeStyles((theme) => {
  return {
    Drawer: {
      width: "100%",
      backgroundColor: `rgba(0,0,0,0.6)`,
    },
    LayoutRoot: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    LayoutChildren: (props) => ({
      width: "100%",

      minHeight: "100vh",
    }),
    SideBarTab: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    tabIndicator: {
      position: "absolute",
      backgroundColor: theme.palette.secondary.main,
      // right: 165,
      width: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },

    Contactform: {
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: 15,
    },
    Header: {
      fontFamily: "vazir",
      [theme.breakpoints.up("md")]: {
        fontSize: 50,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 64,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: 40,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 32,
      },
      color: "black",
      fontWeight: "bolder",
    },
    HeaderContainer: {
      alignSelf: "flex-start",
    },
    header_root: {
      height: "100vh",
      color: "white",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundImage: `url(${baner})`,
      paddingTop: 100,
    },
    developers: {
      [theme.breakpoints.up("lg")]: {
        width: 531,
        height: 470,
      },
      [theme.breakpoints.down("md")]: {
        width: 470,
        height: 370,
      },
      [theme.breakpoints.down("sm")]: {
        width: 360,
        height: 290,
      },
      [theme.breakpoints.down("xs")]: {
        width: 280,
        height: 190,
      },
    },
  };
});
