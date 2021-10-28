import { makeStyles } from "@material-ui/core";
import banner from "../img/background.webp";

const drawerWidth = 170;
export const styles = makeStyles((theme) => {
  return {
    Drawer: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
    },
    LayoutRoot: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    LayoutChildren: {
      width: "100%",
      filter: "grayscale(0%)",
      height: "100vh",
      backgroundImage: `url(${banner})`,
    },
    SideBarTab: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      position: "relative",
      left: 20,
    },
    tabIndicator: {
      position: "absolute",
      backgroundColor: theme.palette.secondary.main,
      right: 165,
      width: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },

    Contactform: {
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: 15,
    },
  };
});
