import styled from 'styled-components'
import { PLAY_LOOP, PLAY_RANDOM } from '@/common/constants'

export const PlaybarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position-x: -30px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? '-165px' : '-204px'};

    &:hover {
      background-position-x: -40px;
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position-x: -110px;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      position: relative;
      top: 8px;
      left: 8px;

      .song-name {
        color: #e1e1e1;
      }

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }

        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;

    &:hover {
      background-position-y: -189px;
    }
  }

  .share {
    background-position: -114px -163px;

    &:hover {
      background-position-y: -189px;
    }
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;

      &:hover {
        background-position-x: -31px;
      }
    }

    .loop {
      background-position: ${props => {
        switch (props.sequence) {
          case PLAY_LOOP:
            return '-3px -344px'
          case PLAY_RANDOM:
            return '-66px -248px'
          default:
            return '-66px -344px'
        }
      }};

      &:hover {
        background-position-x: ${props => {
          switch (props.sequence) {
            case PLAY_LOOP:
              return '-33px'
            case PLAY_RANDOM:
              return '-93px'
            default:
              return '-93px'
          }
        }};
      }
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;

      &:hover {
        background-position-y: -98px;
      }
    }
  }
`
