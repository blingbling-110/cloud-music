import { call, put, takeLatest } from 'redux-saga/effects'
import { requestTopBanners } from '@/services/recommend'
import { chgTopBanners, getTopBanners } from '@/pages/discover/c-pages/recommend/recommendSlice'

function* getTopBannersSaga () {
  const res = yield call(requestTopBanners)
  yield put(chgTopBanners(res.banners))
}

function* recommendSaga () {
  yield takeLatest(getTopBanners.type, getTopBannersSaga)
}

export default recommendSaga
