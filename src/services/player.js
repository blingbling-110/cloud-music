import request from '@/services/request'

export function requestSongDetail (ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}
