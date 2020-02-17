
import "../assets/styles.less";
import { Layout , Row , Col , Pagination   } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import Card from '../components/card';
import { getPosts } from '../api/index';
import { connect } from "react-redux";

const { Content } = Layout;

const IndexPage = (props) => {
 
  return (
  <Layout>
    <Header />
    <Content>
      <Carousel/>
      <Row justify="space-around" type="flex">
      <Col span={20} className="card mb-50">
        <Row gutter={16}>
          { props.data.map(view => (
            <Col span={8} md={8} sm={12} xs={24} className="mb-50">
              <Card key={view.id} post={view}/>
            </Col>
          ))}
          </Row>
      </Col>
      </Row>
    </Content>
    <Footer />
  </Layout> 
  )
}


IndexPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let page = 1;
  const res = await getPosts(page);
  const data = await res.json();
  store.dispatch({ type: "GETDATA", payload: {...data} }); // component will be able to read from store's state when rendered
  return data
}


export default connect()(IndexPage);


