import { all, call, select, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { getPosts } from '../api/index';
import { actionTypes, failure, loadDataSuccess } from './actions';


export const getProject = (state) => state.count

function* loadDataSaga() {
  try {
    //const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    let project = yield select(getProject)
    console.log('project', project)
    const res = yield getPosts()
    const data = yield res.json()
    yield put(loadDataSuccess(data.data))
  } catch (err) {
    yield put(failure(err))
  }
}


function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga), takeEvery(actionTypes.UPDATE_DATA, loadDataSaga)])
}

export default rootSaga