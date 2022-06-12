import { memo, useCallback, useRef } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'
import useNewAlbums from '@/hooks/useNewAlbums'
import { AlbumWrapper } from '@/pages/discover/c-pages/recommend/c-cpns/new-album/style'
import { Carousel } from 'antd'
import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PER_PAGE } from '@/common/constants'
import AlbumCover from 'components/album-cover'

export default memo(function () {
  const { isSuccess, data } = useNewAlbums(NEW_ALBUM_PAGE_NUM * NEW_ALBUM_PER_PAGE)

  const pageRef = useRef()
  const goPrev = useCallback(() => pageRef.current.prev(), [pageRef])
  const goNext = useCallback(() => pageRef.current.next(), [pageRef])

  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title={'新碟上架'} href={'#/discover/album'}/>
      <div className={'content'}>
        <button className={'arrow arrow-left sprite_02'} onClick={goPrev}/>
        <div className={'album'}>
          {
            isSuccess && <Carousel dots={false} ref={pageRef}>
              {
                Array.from({ length: NEW_ALBUM_PAGE_NUM }).map((_, idx) =>
                  <div key={idx} className={'page'}>
                    {
                      data.albums.slice(idx * NEW_ALBUM_PER_PAGE, (idx + 1) * NEW_ALBUM_PER_PAGE).map(album =>
                        <AlbumCover key={album.id} info={album} size={100} width={118} bgp={'-570px'}/>,
                      )
                    }
                  </div>,
                )
              }
            </Carousel>
          }
        </div>
        <button className={'arrow arrow-right sprite_02'} onClick={goNext}/>
      </div>
    </AlbumWrapper>
  )
})
