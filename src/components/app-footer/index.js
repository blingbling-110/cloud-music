import { Fragment, memo } from 'react'

import { FooterLeft, FooterRight, FooterWrapper } from 'components/app-footer/styled'
import { footerImages, footerLinks } from '@/common/local-data'

export default memo(function () {
  return (
    <FooterWrapper>
      <div className={'content wrap-v2'}>
        <FooterLeft>
          <div className={'top'}>
            {
              footerLinks.map((item, index) =>
                <Fragment key={item.title}>
                  {index > 0 && <span className={'line'}>|</span>}
                  <a href={item.link} target={'_blank'} rel="noreferrer">{item.title}</a>
                </Fragment>,
              )
            }
          </div>
          <div className={'center'}>
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：
              <a
                href={'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'}
                target={'_blank'} rel="noreferrer">
                浙网文[2021] 1186-054号
              </a>
            </span>
          </div>
          <div className={'bottom'}>
            <a href={'https://beian.miit.gov.cn/#/Integrated/index'} target={'_blank'} rel={'noreferrer'}>
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <a href={'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'} target={'_blank'}
               rel={'noreferrer'}>
              <i className={'logo'}/>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map(item =>
              <li key={item.link}>
                <a href={item.link} target={'_blank'} rel={'noreferrer'}>img_url</a>
                <i/>
              </li>,
            )
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
