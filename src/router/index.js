import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/pages/discover'))
const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const Album = lazy(() => import('@/pages/discover/c-pages/album'))
const Artist = lazy(() => import('@/pages/discover/c-pages/artist'))
const Djradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const Songs = lazy(() => import('@/pages/discover/c-pages/songs'))
const Mine = lazy(() => import('@/pages/mine'))
const Friend = lazy(() => import('@/pages/friend'))
const Song = lazy(() => import('@/pages/player/song'))

export const routes = [
  {
    index: true,
    element: <Navigate to={'discover'}/>,
  },
  {
    path: 'discover',
    element: <Discover/>,
    children: [
      {
        index: true,
        element: <Navigate to={'recommend'}/>,
      }, {
        path: 'recommend',
        element: <Recommend/>,
      },
      {
        path: 'ranking',
        element: <Ranking/>,
      },
      {
        path: 'songs',
        element: <Songs/>,
      },
      {
        path: 'djradio',
        element: <Djradio/>,
      },
      {
        path: 'artist',
        element: <Artist/>,
      },
      {
        path: 'album',
        element: <Album/>,
      },
    ],
  },
  {
    path: 'mine',
    element: <Mine/>,
  },
  {
    path: 'friend',
    element: <Friend/>,
  },
  {
    path: 'song',
    element: <Song/>,
  },
]
