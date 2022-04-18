import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'

export const routes = [
  {
    path: '/',
    element: <Discover/>
  },
  {
    path: 'mine',
    element: <Mine/>
  },
  {
    path: 'friend',
    element: <Friend/>
  }
]
