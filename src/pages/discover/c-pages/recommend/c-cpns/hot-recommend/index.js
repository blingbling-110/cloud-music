import { memo, useEffect } from 'react'
import { HotRecommendWrapper } from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend/style'
import ThemeHeaderRcm from 'components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommends } from '@/pages/discover/c-pages/recommend/recommendSlice'
import SongsCover from 'components/songs-cover'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

export default memo(function () {
  const { hotRecommends } = useSelector(state => state.recommend, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommends(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title={'热门推荐'} keywords={['华语', '流行', '民谣', '摇滚', '电子']} href={'#/discover/songs'}/>
      <div className={'list'}>
        {
          hotRecommends.map(item => <SongsCover key={item.id} info={item}/>)
        }
      </div>
    </HotRecommendWrapper>
  )
})
