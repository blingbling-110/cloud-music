import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  
  .content {
    display: flex;
    justify-content: space-between;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  
  .top {
    a {
      color: #999;
    }
    
    .line {
      margin: 0 4px 0 6px;
      color: #c2c2c2;
    }
  }
  
  .center span {
    color: #666;
    margin-right: 14px;
  }
  
  .bottom {
    a {
      margin-right: 8px;
    }
    
    .logo {
      width: 14px;
      height: 14px;
      background: url('https://s2.music.126.net/style/web2/img/3rd/police.png?1826a1847329f9748f174adcd11dfe98');
      background-size: cover;
      display: inline-block;
      margin-right: 2px;
      vertical-align: -2px;
    }
  }
`

export const FooterRight = styled.ul`
  width: 420px;
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
  
  li {
    width: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      display: block;
      width: 50px;
      height: 45px;
      text-indent: -9999px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png')});
      background-size: 110px 552px;
    }

    i {
      display: inline-block;
      width: 52px;
      height: 14px;
      margin-top: 5px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png')});
      background-size: 180px 139px;
    }
    
    &:nth-child(1) {
      a {
        background-position: -60px -456.5px;
      }
      
      i {
        background-position: 0 -108px;
        width: 72px;
      }
    }
    
    &:nth-child(2) {
      a {
        background-position: -60px -101px;
      }

      i {
        background-position: -1px -91px;
      }
    }
    
    &:nth-child(3) {
      a {
        background-position: 0 0;
      }

      i {
        background-position: 0 0;
      }
    }
    
    &:nth-child(4) {
      a {
        background-position: -60px -50px;
      }

      i {
        background-position: 0 -54px;
      }
    }
    
    &:nth-child(5) {
      a {
        background-position: 0 -101px;
      }

      i {
        background-position: -1px -72px;
      }
    }
  }
`
