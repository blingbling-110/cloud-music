import { memo } from 'react'
import { AlbumWrapper } from 'components/album-cover/style'
import { getSizeImg } from '@/utils/formatter'

export default memo(function (props) {
  const { info, size = 130, width = 153, bgp = '-845px' } = props

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp} className={'sprite_02'}>
      <div className={'album-image'}>
        <img src={getSizeImg(info.picUrl, size)} alt={'cover_img'}/>
        <a href={'https://music.163.com/album?id=' + info.id} className={'cover image_cover'} target={'_blank'}
           rel="noreferrer">{info.name}</a>
      </div>
      <div className={'album-info'}>
        <div className={'name'}>{info.name}</div>
        <div className={'artist'}>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
