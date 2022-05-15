import { memo } from 'react'

import { RecommendWrapper } from '@/pages/discover/c-pages/recommend/style'
import TopBanner from '@/pages/discover/c-pages/recommend/c-cpns/top-banner'

export default memo(function (props) {
  return (
    <RecommendWrapper>
      <TopBanner/>
    </RecommendWrapper>
  )
})
