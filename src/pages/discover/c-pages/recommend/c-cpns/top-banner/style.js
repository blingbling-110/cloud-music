import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  transition: background 0.5s;

  .banner {
    height: 285px;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  .dots {
    bottom: 0;
    top: 259px;
    
    li {
      width: 20px;
      height: 20px;
      margin: 0 2px;

      button {
        width: 100%;
        height: 100%;
        background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 3px -343px;
        cursor: pointer;
        transition: none;
        opacity: 1;
        
        &:hover {
          opacity: 1;
          background-position: -16px -343px;
        }
      }

      &.slick-active {
        width: 20px;

        button {
          background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat -16px -343px;
        }
      }
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png')});
  position: relative;

  .btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    background: url(${require('@/assets/img/download.png')}) no-repeat 0 9999px;

    &:hover {
      background-position: 0 -290px;
    }
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
  
  .shadow {
    position: absolute;
    top: 0;
    width: 20px;
    height: 285px;
    background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat;
  }
  
  .left {
    left: -20px;
    background-position: -1px 0;
  }
  
  .right {
    right: -20px;
    background-position: -20px 0;
  }
`

export const BannerControl = styled.div`
  height: 63px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
