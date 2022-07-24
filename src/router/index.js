import { Navigate } from 'react-router-dom'

import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/c-pages/recommend'
import Ranking from '@/pages/discover/c-pages/ranking'
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist'
import Djradio from '@/pages/discover/c-pages/djradio'
import Songs from '@/pages/discover/c-pages/songs'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'
import Song from '@/pages/player/song'

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
      },      {
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
