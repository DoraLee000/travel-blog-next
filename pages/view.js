import { connect } from 'react-redux';
import "../assets/styles.less";
import {  Row , Col , Descriptions   } from 'antd';
import Layout from '../components/Layout/layout'

const PostPage = props => {
  const { detail, router } = props;
  const viewDetail = detail.filter(e => e.id == router.query.id)[0]
  return (
    <Layout>
      <Col span={24} className="w-100 mb-50">
      <img src={viewDetail.images[0].src}></img>
      </Col>
      <Descriptions title="景點資訊" layout="vertical" bordered={true}>
      <Descriptions.Item label="景點名稱">{viewDetail.name}</Descriptions.Item>
          <Descriptions.Item label="營業時間">{viewDetail.open_time ? viewDetail.open_time : '--'}</Descriptions.Item>
          <Descriptions.Item label="網站">{viewDetail.url ? viewDetail.url : '--'}</Descriptions.Item>
          <Descriptions.Item label="住址">{viewDetail.address ? viewDetail.address : '--'}</Descriptions.Item>
          <Descriptions.Item label="景點簡介">{viewDetail.introduction ? viewDetail.introduction : '--'}</Descriptions.Item>
        </Descriptions>
  </Layout> 
  )
}

const mapStateToProps = state => {
  return {
    detail: state.views.data,
  };
}


export default connect(mapStateToProps)(PostPage);