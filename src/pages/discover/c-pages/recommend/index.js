import { memo } from 'react'

import { RecommendWrapper } from '@/pages/discover/c-pages/recommend/style'
import TopBanner from '@/pages/discover/c-pages/recommend/c-cpns/top-banner'
import HotRecommend from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/pages/discover/c-pages/recommend/c-cpns/new-album'
import RecommendRanking from '@/pages/discover/c-pages/recommend/c-cpns/recommend-ranking'
import UserLogin from '@/pages/discover/c-pages/recommend/c-cpns/user-login'
import SettleSinger from '@/pages/discover/c-pages/recommend/c-cpns/settle-singer'
import HotAnchor from '@/pages/discover/c-pages/recommend/c-cpns/hot-anchor'

export default memo(function () {
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
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
        </div>
      </div>
    </RecommendWrapper>
  )
})
