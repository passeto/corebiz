import React from "react";
import { connect } from "react-redux";
import get from "../../../utils/get";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";

import * as actions from "../../actions/snackbar";

const FailSnackbar = (props) => {
  const handleClose = () => {
    props.clearSnackbar();
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={props.errorSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <SnackbarContent
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        message={
          <span
            id="client-snackbar"
            style={{
              fontSize: 17,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.failSnackbarMessage}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  errorSnackbarOpen: get(state, "common.snack.errorSnackbarOpen"),
  failSnackbarMessage: get(state, "common.snack.failSnackbarMessage"),
});

const mapActionsToProps = { ...actions };

export default connect(mapStateToProps, mapActionsToProps)(FailSnackbar);
