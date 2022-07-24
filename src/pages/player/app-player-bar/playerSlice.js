import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSong: undefined,
    playList: [],
    curSongIdx: 0,
  },
  reducers: {
    setCurrentSong (state, action) {
      const ids = action.payload
      const playList = state.playList
      state.currentSong = ids
      let idx = playList.findIndex(song => song === ids)
      if (idx === -1) {
        state.playList = [...playList, ids]
        idx = playList.length
      }
      state.curSongIdx = idx
    },
    chgPlayList (state, action) {
      state.playList = action.payload
    },
    chgCurSongIdx (state, action) {
      state.curSongIdx = action.payload
    },
  },
})

export const { setCurrentSong, chgPlayList, chgCurSongIdx } = playerSlice.actions

export default playerSlice.reducer
