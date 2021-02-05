import React, { useEffect } from "react";
import Home from '../components/Home'
import { connect } from "react-redux";
import get from "../../utils/get";
import * as actions from "../actions/list";

const HomeContainer = (props) => {
  useEffect(() => {
    props.getProducts();
    // eslint-disable-next-line
  }, []);
  return <Home onRequestSend={(values) => props.sendNewsletter(values)} {...props} />
}

const mapStateToProps = (state) => ({
  isLoading: get(state, "home.list.isLoading"),
  products: get(state, "home.list.products"),
});

const mapActionsToProps = { ...actions };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeContainer);