import { createSlice } from '@reduxjs/toolkit'

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    topBanners: [],
    hotRecommends: [],
  },
  reducers: {
    getTopBanners () {
    },
    chgTopBanners (state, action) {
      state.topBanners = action.payload
    },
    getHotRecommends (limit) {
    },
    chgHotRecommends (state, action) {
      state.hotRecommends = action.payload
    },
  },
})

export const {
  getTopBanners,
  chgTopBanners,
  getHotRecommends,
  chgHotRecommends,
} = recommendSlice.actions

export default recommendSlice.reducer
