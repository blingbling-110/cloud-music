import { TopRankingWrapper } from 'components/top-ranking/style'
import { getSizeImg } from '@/utils/formatter'
import { memo, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { setCurrentSong } from '@/pages/player/app-player-bar/playerSlice'
import { useDispatch } from 'react-redux'

export default memo(function (props) {
  const { info } = props
  const dispatch = useDispatch()

  const play = useCallback(ids => dispatch(setCurrentSong(ids)), [dispatch])

  return (
    <TopRankingWrapper>
      <div className={'header'}>
        <div className={'image'}>
          <img src={getSizeImg(info?.coverImgUrl)} alt={'cover_img'}/>
          <a href={`#/discover/ranking?id=${info?.id}`} className={'image_cover'}>ranking</a>
        </div>
        <div className={'info'}>
          <a href={`#/discover/ranking?id=${info?.id}`}>{info?.name}</a>
          <div>
            <button className={'btn sprite_02 play'} title={'播放'}/>
            <button className={'btn sprite_02 favor'} title={'收藏'}/>
          </div>
        </div>
      </div>
      <div className={'list'}>
        {
          info?.tracks.slice(0, 10).map((item, idx) =>
            <div key={item.id} className={'list-item'}>
              <div className={'rank'}>{idx + 1}</div>
              <div className={'info'}>
                <NavLink className={'name text-nowrap'} to={`/song?id=${item.id}`}
                         title={item.name}>{item.name}</NavLink>
                <div className={'operate'}>
                  <button className={'btn sprite_02 play'} title={'播放'} onClick={() => play(item.id)}/>
                  <button className={'btn sprite_icon2 addto'} title={'添加到播放列表'}/>
                  <button className={'btn sprite_02 favor'} title={'收藏'}/>
                </div>
              </div>
            </div>,
          )
        }
      </div>
      <div className={'footer'}>
        <a href={`#/discover/ranking?id=${info?.id}`}>查看全部></a>
      </div>
    </TopRankingWrapper>
  )
})
