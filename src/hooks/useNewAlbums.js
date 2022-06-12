import { useQuery } from 'react-query'
import { requestNewAlbums } from '@/services/recommend'

export default function useNewAlbums (limit) {
  return useQuery(['newAlbum', limit], () => requestNewAlbums(limit))
}
