import { all, call, put, takeLatest } from 'redux-saga/effects'
import { requestHotRecommends, requestTopBanners } from '@/services/recommend'
import {
  chgHotRecommends,
  chgTopBanners,
  getHotRecommends,
  getTopBanners,
} from '@/pages/discover/c-pages/recommend/recommendSlice'

function* getTopBannersSaga () {
  const res = yield call(requestTopBanners)
  yield put(chgTopBanners(res.banners))
}

function* getHotRecommendsSaga (action) {
  const res = yield call(requestHotRecommends, action.payload)
  yield put(chgHotRecommends(res.result))
}

function* recommendSaga () {
  yield all([
    takeLatest(getTopBanners.type, getTopBannersSaga),
    takeLatest(getHotRecommends.type, getHotRecommendsSaga)
  ])
}

export default recommendSaga
