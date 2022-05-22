import { memo } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'

export default memo(function () {
  return (
    <div>
      <ThemeHeaderRcm title={'榜单'} href={'#/discover/ranking'}/>
    </div>
  )
})
