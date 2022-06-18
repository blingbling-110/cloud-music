import { TopRankingWrapper } from 'components/top-ranking/style'
import { getSizeImg } from '@/utils/formatter'
import { memo } from 'react'

export default memo(function (props) {
  const { info } = props

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
            <button className={'btn sprite_02 play'}/>
            <button className={'btn sprite_02 favor'}/>
          </div>
        </div>
      </div>
      <div className={'list'}>
        {
          info?.tracks.slice(0, 10).map((item, idx) =>
            <div key={item.id} className={'list-item'}>
              <div className={'rank'}>{idx + 1}</div>
              <div className={'info'}>
                <a className={'name text-nowrap'} href={`https://music.163.com/song?id=${item.id}`} target={'_blank'}
                   rel="noreferrer">{item.name}</a>
                <div className={'operate'}>
                  <button className={'btn sprite_02 play'}/>
                  <button className={'btn sprite_icon2 addto'}/>
                  <button className={'btn sprite_02 favor'}/>
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
