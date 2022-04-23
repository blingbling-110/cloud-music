import { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from 'components/app-header/styled'
import { headerLinks } from '@/common/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default memo(function () {
  const showHeaderLink = (headerLink, index) => {
    if (index < 3) {
      return <NavLink to={headerLink.link}>
        {headerLink.title}
        <i className={'sprite_01 icon'}/>
      </NavLink>
    } else {
      return <a href={headerLink.link}>{headerLink.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className={'content wrap-v1'}>
        <HeaderLeft>
          <a className={'logo sprite_01'} href={'#/'}>网易云音乐</a>
          <div className={'select-list'}>
            {
              headerLinks.map((headerLink, index) =>
                <div key={headerLink.title} className={'select-item'}>
                  {showHeaderLink(headerLink, index)}
                </div>)
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className={'search'} prefix={<SearchOutlined/>} placeholder={'音乐/视频/电台/用户'}/>
          <a className={'center'} href={'https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'}
             target={'_blank'} rel="noreferrer">创作者中心</a>
          <a className={'login'} href={'https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'}
             target={'_blank'} rel="noreferrer">登录</a>
        </HeaderRight>
      </div>
      <div className={'divider'}/>
    </HeaderWrapper>
  )
})
