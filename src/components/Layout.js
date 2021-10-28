import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { SetWidth } from "../redux/Actions";
import { Store } from "../redux/Store";
import { styles } from "../styles/MainStyles";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { Backdrop } from "@material-ui/core";
import SocialMenu from "./SocialMenu";
import { Route } from "react-router";
import Features from "../pages/Features";

const Layout = ({ children, width }) => {
  const [open, setOpen] = React.useState(false);
  let scrollbarRef = React.useRef();
  const classes = styles();
  const scrollToBottom = () => {
    // if (!scrollbarRef || !scrollbarRef.current) {
    //   return;
    // }
    scrollbarRef.current.scrollToBottom();
  };

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
      {/* <Initialload load_gif={load_gif} ref={LoadRef} /> */}
      <Scrollbars
        ref={scrollbarRef}
        style={{ width: "100%", height: "100vh" }}
        autoHide
        autoHideTimeout={200}
      >
        <div className={classes.LayoutRoot}>
          <SideBar width={width} sideStatus={open} setSideStatus={setOpen} />

          <div
            className={classes.LayoutChildren}
            style={{ backgroundRepeat: "round" }}
          >
            <Backdrop in={true} open={true} />
            <NavBar
              setSideStatus={setOpen}
              featureRef={scrollbarRef}
              scrollToBottom={scrollToBottom}
            />
            <SocialMenu />
            {children}
          </div>
          <Route path="/features">
            <div style={{ width: "100%", height: "100vh" }}>
              <Features />
            </div>
          </Route>
        </div>
      </Scrollbars>
    </>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;

  return { width };
};
export default connect(mapStateToProps)(Layout);
