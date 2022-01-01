import React from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  Divider,
  Fab,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import { CloseTwoTone } from "@material-ui/icons";
import { connect } from "react-redux";

const Contract = ({ width }) => {
  const [open, set_open] = React.useState(false);

  return (
    <>
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={() => set_open(true)}>ثبت نام</Button>
        <Button onClick={() => set_open(true)}>ورود</Button>
      </ButtonGroup>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={(e, reason) => reason !== "backdropClick" && set_open(false)}
        maxWidth="lg"
        TransitionComponent={Transition}
        disableEscapeKeyDown
      >
        <DialogContent>
          <Grid container>
            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                style={{ fontSize: width > 600 ? 22 : 16 }}
              >
                Let's Start
              </Typography>
              <Fab size="small" color="primary" onClick={() => set_open(false)}>
                <CloseTwoTone color="secondary" fontSize="medium" />
              </Fab>
            </Grid>
            <Divider
              style={{
                width: "100%",
                margin: "10px 0",
                backgroundColor: "black",
              }}
            />
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              style={{ color: "white" }}
            >
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  Amin Hoseyni
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  Iran Hamedan{" "}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  hoseiny_amin@ymail.com
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  +98 990 450 8585
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: width > 600 ? 16 : 12 }}
                >
                  October 15 , 2021
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography
                  variant="body1"
                  style={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    fontSize: width > 600 ? 16 : 12,
                  }}
                >
                  Hello, I am Amin
                  <br />
                  I am proud to announce my readiness to start cooperation in
                  developing web, mobile and desktop applications -working with
                  teams or performing by myself.
                  <br />
                  I know that it could be grueling to find the right person for
                  a job, especially when it comes to trusting them to
                  demonstrate your business to the world, Therefore the whole
                  porpuse of this page is to gives you the ability to trust.
                  <br />
                  There are a lot of to cover to be truly able to call yourself
                  a senior in any field ,But once you understand the core
                  concepts and find the right tools, you can travel to Mars over
                  time.
                  <br />
                  I've grasp the concepts, pack the tools and determined the
                  path. Let's travel together.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
const mapStateToProps = (props) => {
  const { width } = props;
  return { width };
};

export default connect(mapStateToProps)(Contract);
const Transition = React.forwardRef((props, ref) => {
  return <Zoom in={true} ref={ref} {...props} timeout={300} />;
});
