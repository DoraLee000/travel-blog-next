import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import CardList from "../components/card";
import Pagination from "../components/pagination";
import Layout from "../layout/Main";
import { loadData } from "../store/actions";
// import Counter from "../components/counter";

const HomePage = () => {
  return (
    <Layout>
      <Pagination />
      <CardList title="Index Page" />
    </Layout>
  );
};

HomePage.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  // console.log(store.getState().defultData);
  // if (!store.getState().defultData) {
  store.dispatch(loadData());
  console.log(typeof window === "undefined")
  // }
  return { isServer };
};

export default connect()(HomePage);
