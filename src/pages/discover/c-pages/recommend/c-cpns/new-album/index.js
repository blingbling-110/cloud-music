import { memo } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'

export default memo(function () {
  return (
    <div>
      <ThemeHeaderRcm title={'新碟上架'} href={'#/discover/album'}/>
    </div>
  )
})
