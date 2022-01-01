import { ClickAwayListener, IconButton } from "@material-ui/core";
import {
  Email,
  Facebook,
  GitHub,
  KeyboardArrowRight,
  Phone,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";

const SocialMenu = ({ width }) => {
  let [open, set_open] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => set_open(false)}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
          boxShadow: "0 0 3px #999",
          width: 50,
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          transition: ".3s",
          height: open ? 300 : 55,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <IconButton onClick={() => set_open((pre) => !pre)} style={{}}>
          <KeyboardArrowRight
            color="primary"
            fontSize="large"
            style={{
              transform: `rotate(${open ? 90 : 0}deg)`,
              transition: ".3s",
            }}
          />
        </IconButton>
        <IconButton style={{}}>
          <GitHub color="primary" />
        </IconButton>
        <IconButton style={{}}>
          <WhatsApp color="primary" />
        </IconButton>
        <IconButton style={{}}>
          <Facebook color="primary" />
        </IconButton>
        <IconButton style={{}}>
          <Email color="primary" />
        </IconButton>
        <IconButton style={{}}>
          <Phone color="primary" />
        </IconButton>
      </div>
    </ClickAwayListener>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;
  return { width };
};

export default connect(mapStateToProps)(SocialMenu);
