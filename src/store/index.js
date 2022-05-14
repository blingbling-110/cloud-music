import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/store/sagas'
import recommendReducer from '@/pages/discover/c-pages/recommend/recommendSlice'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    recommend: recommendReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
