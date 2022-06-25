import { HashRouter, useRoutes } from 'react-router-dom'

import { routes } from '@/router'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
import AppPlayerBar from '@/pages/player/app-player-bar'

function RouteElement () {
  return useRoutes(routes)
}

function App () {
  return (
    <HashRouter>
      <AppHeader/>
      <RouteElement/>
      <AppFooter/>
      <AppPlayerBar/>
    </HashRouter>
  )
}

export default App
