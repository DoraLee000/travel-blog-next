import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { updateData, increment } from '../store/actions';
import Router from 'next/router'
import { getPosts } from '../api/index';


const PaginationModule = ({current , onChangeEvent}) => {
  return(
    <div>
      <Pagination 
        defaultCurrent={current} 
        defaultPageSize={30} 
        onChange={onChangeEvent} total={430}>
      </Pagination>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeEvent: event => {
      console.log('event',event)
      dispatch(updateData(event))
      Router.push({
        pathname: '/',
        query: { page: event },
      });
    },
  }
}

export default connect(null,mapDispatchToProps)(PaginationModule)