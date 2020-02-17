import { Layout , Row , Col ,Icon } from 'antd';
import "../assets/styles.less";
const { Footer } = Layout;

const FooterModule = () => {
  return(
  <Footer style={{ background: '#f9f9f9' }}>
     <Row justify="space-around" type="flex">
      <Col span={20}>
        <Row justify="space-around" type="flex">
          <Col span={12} md={12} xs={24}>
          <div style={{ margin: 'auto 0px' }}>
            &copy; 2020 Dora Blog 
          </div>
          </Col>
          <Col span={12} md={12} xs={0}>
          <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
            <Icon className="icon" type="facebook" />
            <Icon className="icon" type="instagram" />
            <Icon className="icon" type="google" />
          </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Footer>
  )};

  export default FooterModule;