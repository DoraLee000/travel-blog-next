import React from "react";
import { connect } from "react-redux";
// import { Pagination, BackTop } from 'antd';
import Link from "next/link";
import CardList from "../components/card";
import Pagination from "../components/pagination";
import Layout from "../layout/Main";

import { loadData } from "../store/actions";
import Counter from "../components/counter";

const HomePage = () => {
  return (
    <Layout>
      <Counter />
      <Pagination />
      <CardList title="Index Page" />
    </Layout>
  );
};

<<<<<<< HEAD
  render() {
    return (
      <Layout>
        <CardList title="Index Page" />
        <Pagination />
      </Layout>
    )
  }
}

export default connect()(Index)
=======
HomePage.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  // console.log(store.getState().defultData);
  // if (!store.getState().defultData) {
    store.dispatch(loadData());
  // }
  return { isServer };
};
>>>>>>> ae49e47ed3eeaa579b0bf4cfe55cbd4c2ef20091

export default connect()(HomePage);
