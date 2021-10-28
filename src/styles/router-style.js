import { makeStyles } from "@material-ui/core";

export const router_style = makeStyles((theme) => ({
  route_inter: {
    position: "absolute",
    opacity: 0,
    right: "1000px",
    transform: "scale(0)",
  },
  route_inter_active: {
    position: "absolute",
    opacity: 1,
    transition: "500ms",
    right: "0",
    transform: "scale(1)",
  },

  route_exit: {
    position: "absolute",
    opacity: 1,
    left: "0",
    transform: "scale(1)",
  },
  route_exit_active: {
    position: "absolute",
    opacity: 0,
    transition: "500ms",

    left: "1000px",
    transform: "scale(0)",
  },
}));
