import { memo } from 'react'
import styled from 'styled-components'

const MineWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 172px - 75px);
  min-width: 982px;
  background: #f5f5f5;

  .content {
    width: 980px;
    height: 100%;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: solid #d3d3d3;
    border-width: 0 1px;
    display: flex;
    align-items: center;
    justify-content: center;

    .picture, .link {
      background: url(${props => props.param.bgImg}) no-repeat;
    }

    .picture {
      width: ${props => props.param.bgW}px;
      height: ${props => props.param.bgH}px;

      .link {
        display: block;
        width: ${props => props.param.btnW}px;
        height: ${props => props.param.btnH}px;
        margin: ${props => props.param.btnMT}px 0 0 ${props => props.param.btnML}px;
        background-position: 0 9999px;
        text-indent: -9999px;

        &:hover {
          background-position: ${props => props.param.btnX}px ${props => props.param.btnY}px;
        }
      }
    }
  }
`

export default memo(function (props) {
  return (
    <MineWrapper param={props}>
      <div className={'content'}>
        <div className={'picture'}>
          <a className={'link'} href={'https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'} target={'_blank'}
             rel={'noreferrer'}>立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})
