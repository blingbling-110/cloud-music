import { useQuery } from 'react-query'
import { requestNewAlbums, requestPlayListDetail, requestTopList } from '@/services/recommend'

export function useNewAlbums (limit) {
  return useQuery(['newAlbum', limit], () => requestNewAlbums(limit))
}

export function useTopList () {
  return useQuery('topList', () => requestTopList())
}

export function usePlayListDetail (id) {
  return useQuery(['playListDetail', id], () => requestPlayListDetail(id))
}
