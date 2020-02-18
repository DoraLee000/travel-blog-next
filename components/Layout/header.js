import { Layout , Row , Col  } from 'antd';
import Link from 'next/link';
import "../../assets/styles.less";
const { Header } = Layout;

const HeaderModule = () => {
  return(
  <Header>
    <Row justify="space-around" type="flex">
      <Col span={20}>
        <Row justify="space-around" type="flex">
          <Col span={12} md={12} xs={24}>
            <span className="ml-30 float-left"><Link href="/"><a>Welcome to Dora  Blog</a></Link></span>
          </Col>
          <Col span={12} md={12} xs={0}>
          </Col>
        </Row>
      </Col>
    </Row>
  </Header>
  )};

  export default HeaderModule;