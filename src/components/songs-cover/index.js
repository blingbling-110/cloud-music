import { memo } from 'react'
import { SongsCoverWrapper } from 'components/songs-cover/style'
import { getCount, getSizeImg } from '@/utils/formatter'

export default memo(function (props) {
  const { info, right, showSrc = false, noWrap = false } = props
  const href = 'https://music.163.com/playlist?id=' + info.id
  const srcHref = info?.artist?.id ? 'https://music.163.com/user/home?id=' + info?.artist?.id : '/#'

  return (
    <SongsCoverWrapper right={right}>
      <div className={'cover-top'}>
        <img src={getSizeImg(info.picUrl, 140)} alt={'cover'}/>
        <div className="cover sprite_cover">
          <a href={href} target={'_blank'} rel="noreferrer">{info.name}</a>
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon head-phone"/>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" title={'播放'}/>
          </div>
        </div>
      </div>
      <div className={'cover-bottom' + (noWrap ? ' text-nowrap' : '')}>
        <a href={href} target={'_blank'} rel="noreferrer" title={info.name}>{info.name}</a>
      </div>
      {
        showSrc && <div className={'cover-source' + (noWrap ? ' text-nowrap' : '')}>
          by
          <a className={'author'} href={srcHref} target={'_blank'} rel="noreferrer">
            {info.copywriter || info.creator.nickname}
          </a>
        </div>
      }
    </SongsCoverWrapper>
  )
})
