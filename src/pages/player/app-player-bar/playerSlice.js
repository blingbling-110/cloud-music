import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    // TODO undefined
    currentSong: 28188427,
  },
  reducers: {
    setCurrentSong (state, action) {
      state.currentSong = action.payload
    },
  },
})

export default playerSlice.reducer
