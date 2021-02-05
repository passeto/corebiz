import React from "react";
import { connect } from "react-redux";
import get from "../../../utils/get";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";

import * as actions from "../../actions/snackbar";

const SuccessSNackbar = (props) => {
  const handleClose = () => {
    props.clearSnackbar();
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={props.successSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <SnackbarContent
        style={{
          backgroundColor: "green",
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
            {props.successSnackbarMessage}
          </span>
        }
      />
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  successSnackbarOpen: get(state, "common.snack.sucessSnackbarOpen"),
  successSnackbarMessage: get(state, "common.snack.successSnackbarMessage"),
});

const mapActionsToProps = { ...actions };

export default connect(mapStateToProps, mapActionsToProps)(SuccessSNackbar);
