import { HashRouter, useRoutes } from 'react-router-dom'
import { Suspense } from 'react'

import { routes } from '@/router'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
import AppPlayerBar from '@/pages/player/app-player-bar'
import { Spin } from 'antd'
import { LoadingWrapper } from '@/style'

function RouteElement () {
  return useRoutes(routes)
}

function App () {
  return (
    <HashRouter>
      <AppHeader/>
      <Suspense fallback={<LoadingWrapper><Spin size={'large'}/></LoadingWrapper>}>
        <RouteElement/>
      </Suspense>
      <AppFooter/>
      <AppPlayerBar/>
    </HashRouter>
  )
}

export default App
