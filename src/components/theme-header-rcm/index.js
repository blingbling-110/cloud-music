import { memo } from 'react'
import { HeaderWrapper } from 'components/theme-header-rcm/style'

export default memo(function (props) {
  const { title, keywords = [], href } = props

  return (
    <HeaderWrapper className={'sprite_02'}>
      <div className={'left'}>
        <a className={'title'} href={href}>{title}</a>
        <div className={'keyword'}>
          {
            keywords.map((keyword, idx) => (
              <div className={'item'} key={keyword}>
                <a href={href + '?cat=' + keyword}>{keyword}</a>
                {
                  idx !== keywords.length - 1 && <span className={'divider'}>|</span>
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className={'right'}>
        <a href={href}>更多</a>
        <i className={'icon sprite_02'}/>
      </div>
    </HeaderWrapper>
  )
})
