import { IconButton } from "@material-ui/core";
import {
  Email,
  Facebook,
  GitHub,
  KeyboardArrowRight,
  Phone,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";

const SocialMenu = () => {
  let [open, set_open] = React.useState(false);
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
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
  );
};

export default SocialMenu;
