import { memo } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'
import { usePlayListDetail, useTopList } from '@/hooks/recommend'
import TopRanking from 'components/top-ranking'
import { RankingWrapper } from '@/pages/discover/c-pages/recommend/c-cpns/recommend-ranking/style'

export default memo(function () {
  const { data } = useTopList()
  const { data: listData0 } = usePlayListDetail(data?.list?.[0].id)
  const { data: listData1 } = usePlayListDetail(data?.list?.[1].id)
  const { data: listData2 } = usePlayListDetail(data?.list?.[2].id)

  return (
    <RankingWrapper>
      <ThemeHeaderRcm title={'榜单'} href={'#/discover/ranking'}/>
      <div className={'tops'}>
        <TopRanking info={listData0?.playlist}/>
        <TopRanking info={listData1?.playlist}/>
        <TopRanking info={listData2?.playlist}/>
      </div>
    </RankingWrapper>
  )
})
