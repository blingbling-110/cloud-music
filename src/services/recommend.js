import request from '@/services/request'

export function requestTopBanners () {
  return request({
    url: '/banner',
  })
}

export function requestHotRecommends (limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function requestNewAlbums (limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}
