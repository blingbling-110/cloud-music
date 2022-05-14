import { createSlice } from '@reduxjs/toolkit'

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    topBanners: [],
  },
  reducers: {
    getTopBanners () {
    },
    chgTopBanners (state, action) {
      state.topBanners = action.payload
    },
  },
})

export const { getTopBanners, chgTopBanners } = recommendSlice.actions

export default recommendSlice.reducer
