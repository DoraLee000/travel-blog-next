import { Card, Tag, Col  } from 'antd';
import { Link } from '../routes';
import { connect } from 'react-redux';

const CardModule = ({ title , defultData }) => {
  const Attractions = defultData || [];
  return(
    <div>
      { Attractions.map(item => 
        <Col span={8} md={8} sm={12} xs={24} className="mb-50">
        <Link route='view' params={{ id: item.id }}>
          <Card
            hoverable
            key={ item.id }
            title={ item.name }
            className="card mb-50 content-ellipsis"
            cover={<img alt={ item.name } src={ item.images[0] ? item.images[0].src:'' } />}
            >
            <ul>
              <li className="content-ellipsis">
                <span className="content-p">景點地址:</span>{ item.address }
                </li>
              <li className="content-ellipsis">
                <span className="content-p">營業時間:</span>{ item.open_time ? item.open_time:'無' }
                </li>
              <li className="content-ellipsis">
                <span className="content-p">景點分類:</span>{ item.category.map(e => <Tag color="magenta">{ e.name }</Tag>) }
              </li>
            </ul>
          </Card>
        </Link>
        </Col>
        )}
    </div>
  )
}

export default connect(state => state)(CardModule)