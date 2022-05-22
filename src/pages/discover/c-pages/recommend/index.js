import { memo } from 'react'

import { RecommendWrapper } from '@/pages/discover/c-pages/recommend/style'
import TopBanner from '@/pages/discover/c-pages/recommend/c-cpns/top-banner'
import HotRecommend from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/pages/discover/c-pages/recommend/c-cpns/new-album'
import RecommendRanking from '@/pages/discover/c-pages/recommend/c-cpns/recommend-ranking'

export default memo(function (props) {
  return (
    <RecommendWrapper>
      <TopBanner/>
      <div className={'content wrap-v2'}>
        <div className={'left-column'}>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </div>
        <div className={'right-column'}>
        </div>
      </div>
    </RecommendWrapper>
  )
})
