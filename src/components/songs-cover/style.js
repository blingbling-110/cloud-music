import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        * {
          line-height: 12px;
        }

        .head-phone {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          cursor: pointer;

          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    margin-top: 5px;

    a {
      color: #000;
    }
  }

  .cover-source {
    color: #999;
    
    a {
      color: #666;
    }
  }
`
