import { memo, useCallback, useRef } from 'react'
import { Control, Operator, PlaybarWrapper, PlayInfo } from '@/pages/player/app-player-bar/style'
import { message, Slider } from 'antd'
import { useQuery } from 'react-query'
import { requestSongDetail } from '@/services/player'
import { useSelector } from 'react-redux'
import { PLAYER_DEFAULT_PIC_URL } from '@/common/constants'
import { formatDate, getPlaySong, getSizeImg } from '@/utils/formatter'

export default memo(function () {
  const { currentSong } = useSelector(state => state.player)
  const { isError, data } = useQuery('songDetail', () => requestSongDetail(currentSong))
  isError && message.error('网络异常')
  const song = data?.songs?.[0]

  const audioRef = useRef()
  const playMusic = useCallback(() => {
    if (!song) {
      return
    }
    audioRef.current.src = getPlaySong(song.id)
    audioRef.current.play()
  }, [])

  return (
    <PlaybarWrapper className={'sprite_player'}>
      <div className={'content wrap-v2'}>
        <Control>
          <button className={'sprite_player btn prev'}/>
          <button className={'sprite_player btn play'} onClick={playMusic}/>
          <button className={'sprite_player btn next'}/>
        </Control>
        <PlayInfo>
          <div className={'image'}>
            <a href={!!song?.id ? '#/song?id=' + song?.id : '/#'} title={song?.name ?? ''}>
              <img src={getSizeImg(song?.al?.picUrl ?? PLAYER_DEFAULT_PIC_URL, 34)} alt={'avatar'}/>
            </a>
          </div>
          <div className={'info'}>
            <div className={'song'}>
              <a href={!!song?.id ? '#/song?id=' + song?.id : '/#'}
                 className={'song-name'} title={song?.name ?? ''}>{song?.name ?? ''}</a>
              <a href={!!song?.ar?.[0]?.id ? 'https://music.163.com/artist?id=' + song?.ar?.[0]?.id : '/#'}
                 className={'singer-name'} target={'_blank'} rel="noreferrer"
                 title={song?.ar?.[0]?.name ?? ''}>{song?.ar?.[0]?.name ?? ''}</a>
            </div>
            <div className={'progress'}>
              <Slider defaultValue={0} tooltipVisible={false}/>
              <div className={'time'}>
                <span className={'now-time'}>{song?.dt ?? '00:00'}</span>
                <span className={'divider'}>/</span>
                <span className={'duration'}>{formatDate(song?.dt, 'mm:ss') ?? '00:00'}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className={'left'}>
            <button className={'sprite_player btn favor'}/>
            <button className={'sprite_player btn share'}/>
          </div>
          <div className={'right sprite_player'}>
            <button className={'sprite_player btn volume'}/>
            <button className={'sprite_player btn loop'}/>
            <button className={'sprite_player btn playlist'}/>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}/>
    </PlaybarWrapper>
  )
})
