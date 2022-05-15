import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBanners } from '@/pages/discover/c-pages/recommend/recommendSlice'

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper,
} from '@/pages/discover/c-pages/recommend/c-cpns/top-banner/style'
import { Carousel } from 'antd'

const TYPE_MAP = {
  1: 'song',
  10: 'album',
}

export default memo(function () {
  const [currIdx, setCurrIdx] = useState(0)

  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBanners())
  }, [dispatch])

  const bannerRef = useRef()
  const bannerChg = useCallback((_, to) => {
    setCurrIdx(to)
  }, [])
  const getHref = useCallback(({ targetId, targetType, url }) => {
    if (url) {
      return [url, '_blank']
    } else if (targetId !== null && targetType !== null) {
      return [`https://music.163.com/#/${TYPE_MAP[targetType]}?id=${targetId}`, '']
    }
  }, [])

  return (
    <BannerWrapper bgImage={topBanners[currIdx]?.imageUrl + '?imageView&blur=40x20'}>
      <div className={'banner wrap-v2'}>
        <BannerControl>
          <button className={'btn left'} onClick={() => bannerRef.current.prev()}/>
          <button className={'btn right'} onClick={() => bannerRef.current.next()}/>
        </BannerControl>
        <BannerLeft>
          <Carousel ref={bannerRef} effect="fade" autoplay autoplaySpeed={5000}
                    dots={{ className: 'dots' }} beforeChange={bannerChg}>
            {
              topBanners.map(banner => {
                const [href, target] = getHref(banner)
                return (
                  <div className={'banner-item'} key={banner.targetId}>
                    <a href={href} target={target}>
                      <img className={'image'} src={banner.imageUrl + '?imageView&quality=89'} alt={banner.typeTitle}/>
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" target={'_blank'} rel="noreferrer" className={'btn'}>
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <div className={'shadow left'}/>
          <div className={'shadow right'}/>
        </BannerRight>
      </div>
    </BannerWrapper>
  )
})
