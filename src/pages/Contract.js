import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Fab,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import { CloseTwoTone, Done } from "@material-ui/icons";

const Contract = () => {
  const [open, set_open] = React.useState(false);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => set_open(true)}
        startIcon={<Done />}
      >
        Get Start
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={(e, reason) => reason !== "backdropClick" && set_open(false)}
        maxWidth="lg"
        TransitionComponent={Transition}
        disableEscapeKeyDown
      >
        <DialogContent>
          <Grid item xs={12} container>
            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">Let's Start</Typography>
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
            <Grid item xs={12} container justifyContent="center">
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography variant="body1">Amin Hoseyni</Typography>
                <Typography variant="body1">Iran Hamedan </Typography>
                <Typography variant="body1">hoseiny_amin@ymail.com</Typography>
                <Typography variant="body1">+98 990 450 8585</Typography>
                <Typography variant="body1">October 15 , 2021</Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "16px 0" }}>
                <Typography variant="body1" style={{ lineHeight: 1.8 }}>
                  Hello, I am Amin
                  <br />
                  I am proud to announce my readiness to start cooperation in
                  performing web applications, working with teams or performing
                  by myself. If you haven't finish checking around the page, I
                  encourage you to go back and take a look at all the feature
                  that came together to perform this sample. And if you check
                  those sections, I hope it would gave you the right signs to
                  start trusting me and my work
                  <br />
                  And as action speak louder than words, I want you to deside
                  whether you can trust me or not with your bussiness based on
                  the performance you see in here, right now.
                  <br />
                  There are a lot of to cover to be truly able to call yourself
                  a senior in any field ,But once you understand the general
                  concept and find the right tools, you can easily travel to
                  Mars over time. I've grasp the concept, pack the needed tools
                  and determined the path.
                  <br />
                  Let's travel together.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contract;
const Transition = React.forwardRef((props, ref) => {
  return <Zoom in={true} ref={ref} {...props} timeout={300} />;
});
