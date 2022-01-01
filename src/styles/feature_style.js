import { makeStyles } from "@material-ui/core";
import baner from "../img/banner.png";
export const feature_style = makeStyles((theme) => ({
  route_inter: {
    position: "absolute",
    opacity: 0,

    transform: "scale(0)",
  },
  route_inter_active: {
    position: "absolute",
    opacity: 1,
    transition: "500ms",
    transform: "scale(1)",
  },

  route_exit: {
    position: "absolute",
    opacity: 1,
    transform: "scale(1)",
  },
  route_exit_active: {
    position: "absolute",
    opacity: 0,
    transition: "500ms",
    transform: "scale(0)",
  },
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundImage: `url(${baner})`,
    height: "100vh",
    justifyContent: "center",
    transform: "scaleY(-1)",
  },
  feature_container: {
    height: "calc(100% - 100px)",
    transform: "scaleY(-1)",
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
    color: "white",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
}));
