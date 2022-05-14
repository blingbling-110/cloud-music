import { memo, useEffect } from 'react'
import { getTopBanners } from '@/pages/discover/c-pages/recommend/recommendSlice'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export default memo(function (props) {
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBanners())
  }, [dispatch])

  return (
    <div>{topBanners.length}</div>
  )
})
