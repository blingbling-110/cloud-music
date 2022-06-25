import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/store/sagas'
import recommendReducer from '@/pages/discover/c-pages/recommend/recommendSlice'
import playerReducer from '@/pages/player/app-player-bar/playerSlice'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
