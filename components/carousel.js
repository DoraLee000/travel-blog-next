import { Carousel, Row, Col } from 'antd';
const Index = () => {
  return (
    <Row justify="space-around" type="flex">
      <Col span={24} className="carousel mb-50">
        <Carousel autoplay>
          <div >
            <h3>
              <img src="/static/images/12.jpg" />
            </h3>
          </div>
        </Carousel>
      </Col>
    </Row>
  )
}

// <div>
// <h3>
//   <img src="/static/images/big-images-2.jpg" />
// </h3>
// </div>
// <div>
// <h3>
//   <img src="/static/images/big-images-3.jpg" />
// </h3>
// </div>
export default Index