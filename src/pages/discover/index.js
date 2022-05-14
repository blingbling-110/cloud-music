import { memo } from 'react'

import { dicoverMenu } from '@/common/local-data'

import { NavLink, Outlet } from 'react-router-dom'
import { DiscoverWrapper, TopMenu } from '@/pages/discover/style'

export default memo(function () {
  return (
    <DiscoverWrapper>
      <div className={'top'}>
        <TopMenu className={'wrap-v1'}>
          {
            dicoverMenu.map(({ title, link }) => (
              <div className={'item'} key={title}>
                <NavLink to={link}>{title}</NavLink>
              </div>
            ))
          }
        </TopMenu>
      </div>
      <Outlet/>
    </DiscoverWrapper>
  )
})
