
import { Card ,Tag  } from 'antd';
import { Link } from '../routes'
import "../assets/styles.less";

const cardModule = ({post}) => {
  const { images } = post;
  let imageURL = images[0]?post.images[0].src:''
  return(
    <Link route='view' params={{ id: post.id }}>
      <Card
        hoverable
        key={ post.id }
        title={ post.name }
        className="card mb-50 content-ellipsis"
        cover={<img alt={ post.name } src={ imageURL } />}
        >
        <ul>
          <li className="content-ellipsis">
            <span className="content-p">景點地址:</span>{ post.address }
            </li>
          <li className="content-ellipsis">
            <span className="content-p">營業時間:</span>{ post.open_time ? post.open_time:'無' }
            </li>
          <li className="content-ellipsis">
            <span className="content-p">景點分類:</span>{ post.category.map(e => <Tag color="magenta">{ e.name }</Tag>) }
          </li>
        </ul>
      </Card>
    </Link>
  )
}


export default cardModule;