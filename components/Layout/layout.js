import Header from './header';
import Footer from './footer';
import { Layout , Row , Col  } from 'antd'
import Carousel from '../carousel';;
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
  </Layout>
);

export default LayoutIndex;