import request from '@/services/request'

export function requestTopBanners () {
  return request({
    url: '/banner',
  })
}
