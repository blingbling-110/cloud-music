import request from '@/services/request'

export function requestSongDetail (ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

export function requestLyric (id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}
