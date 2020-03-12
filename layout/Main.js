import Header from '../components/header';
import Footer from '../components/footer';
import { Layout , Row , Col, BackTop  } from 'antd';
import Carousel from '../components/carousel';
const { Content } = Layout;

const LayoutIndex = ({ children }) => (
  <Layout>
    <Header/>
      <Content>
        <Carousel/>
          <Row justify="space-around" type="flex">
            <Col span={20} className="card mb-50">
              <Row gutter={16}>
              { children }  
              </Row>
            </Col>
          </Row>
      </Content>  
    <Footer/>
    <BackTop />
  </Layout>
);

export default LayoutIndex;