import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTopBanners } from '@/pages/discover/c-pages/recommend/recommendSlice'

export default connect(state => ({
  topBanners: state.recommend.topBanners,
}), dispatch => ({
  getBanners: () => {
    dispatch(getTopBanners())
  },
}))(memo(function (props) {
  const { topBanners, getBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>{topBanners.length}</div>
  )
}))
