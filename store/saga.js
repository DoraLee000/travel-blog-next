import { all, call, select, put, takeLatest , takeEvery  } from 'redux-saga/effects';
import { getPosts } from '../api/index';
import { actionTypes, failure, loadDataSuccess } from './actions';


export const current = (state) => state.current

function* loadDataSaga() {
  try {
    //const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    let currentNum = yield select(current)
    console.log('project66',currentNum)
    const res = yield fetch(`/api/attractions`,{ page:6 });
    const data = yield res.json()
    yield put(loadDataSuccess(data.data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([takeEvery (actionTypes.LOAD_DATA, loadDataSaga),takeEvery (actionTypes.UPDATE_DATA, loadDataSaga)])
  // yield [
  //   takeEvery (actionTypes.LOAD_DATA, loadDataSaga),
  //   takeEvery (actionTypes.UPDATE_DATA, loadDataSaga)
  // ]
}

export default rootSaga