
import "../assets/styles.less";
import { Col , Pagination  } from 'antd';
import Link from 'next/link'
import Layout from '../components/Layout/layout'
import Card from '../components/card';
import { getPosts } from '../api/index';
import { connect } from "react-redux";

const IndexPage = (props) => {
const { data,total } = props
console.log(store)
  return (
  <Layout>
      { data.map(view => (
        <Col span={8} md={8} sm={12} xs={24} className="mb-50">
          <Card key={view.id} post={view}/>
        </Col>
      ))}
      <Pagination defaultCurrent={1} defaultPageSize={30} total={total}></Pagination>
  </Layout>
  )
}


IndexPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let page = 1;
  const res = await getPosts(page);
  const data = await res.json();
  store.dispatch({ type: "GETDATA", payload: {...data} }); 
  return { ...data , total: 443 }
}


export default connect()(IndexPage);


