import React from "react";

import { SetWidth } from "../redux/Actions";
import { Store } from "../redux/Store";
import { styles } from "../styles/MainStyles";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
// import { Backdrop } from "@material-ui/core";
import SocialMenu from "./SocialMenu";

const Layout = ({ children, width }) => {
  const [open, setOpen] = React.useState(false);

  const classes = styles();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      Store.dispatch(SetWidth(window.innerWidth));
    });
    return window.removeEventListener("resize", () => {
      Store.dispatch(SetWidth(window.innerWidth));
    });
  }, [width]);
  return (
    <>
      <div className={classes.LayoutRoot}>
        <SideBar width={width} sideStatus={open} setSideStatus={setOpen} />
        <div className={classes.LayoutChildren}>
          <NavBar setSideStatus={setOpen} />

          <SocialMenu />
          {children}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;

  return { width };
};
export default connect(mapStateToProps)(Layout);
