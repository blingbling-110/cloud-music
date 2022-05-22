import { memo } from 'react'
import { HotRecommendWrapper } from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend/style'
import ThemeHeaderRcm from 'components/theme-header-rcm'

export default memo(function () {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title={'热门推荐'} keywords={['华语', '流行', '民谣', '摇滚', '电子']} href={'#/discover/songs'}/>
    </HotRecommendWrapper>
  )
})
