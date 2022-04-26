import { memo } from 'react'
import LoginPage from 'components/login-page'

export default memo(function () {
  return (
    <LoginPage
      bgImg={'https://s2.music.126.net/style/web2/img/notlogin.jpg?a733f8ffb6d5d6cc20cd016d014093de'}
      bgW={902}
      bgH={414}
      btnX={0}
      btnY={-430}
      btnW={157}
      btnH={48}
      btnMT={260}
      btnML={535}
    />
  )
})
