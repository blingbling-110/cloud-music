import { createSlice } from '@reduxjs/toolkit'
import { PLAY_LOOP, PLAY_RANDOM, PREV } from '@/common/constants'
import { getRandomNum } from '@/utils/math'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playList: [],
    curSongIdx: 0,
    sequence: PLAY_LOOP,
  },
  reducers: {
    setCurrentSong (state, action) {
      const ids = action.payload
      const playList = state.playList
      let idx = playList.findIndex(song => song === ids)
      if (idx === -1) {
        state.playList = [...playList, ids]
        idx = playList.length
      }
      state.curSongIdx = idx
    },
    chgSequence (state, action) {
      state.sequence = action.payload
    },
    switchSong (state, action) {
      const { sequence, curSongIdx, playList } = state
      let idx = curSongIdx

      if (sequence === PLAY_RANDOM) {
        while (playList.length > 1 && idx === curSongIdx) {
          idx = getRandomNum(playList.length)
        }
      } else {
        if (action.payload === PREV) {
          idx = curSongIdx - 1
        } else {
          idx = curSongIdx + 1
        }
        if (idx >= playList.length) {
          idx = 0
        }
        if (idx < 0) {
          idx = playList.length - 1
        }
      }

      state.curSongIdx = idx
    },
  },
})

export const { setCurrentSong, chgSequence, switchSong } = playerSlice.actions

export default playerSlice.reducer
