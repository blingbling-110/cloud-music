import { all } from 'redux-saga/effects'
import recommendSaga from '@/pages/discover/c-pages/recommend/recommendSaga'

function* rootSaga () {
  yield all([
    recommendSaga(),
  ])
}

export default rootSaga
