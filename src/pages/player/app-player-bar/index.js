import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Control, Operator, PlaybarWrapper, PlayInfo } from '@/pages/player/app-player-bar/style'
import { message, Slider } from 'antd'
import { useQuery } from 'react-query'
import { requestSongDetail } from '@/services/player'
import { useSelector } from 'react-redux'
import { PLAYER_DEFAULT_PIC_URL } from '@/common/constants'
import { formatDate, getPlaySong, getSizeImg } from '@/utils/formatter'
import { NavLink } from 'react-router-dom'

export default memo(function () {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useSelector(state => state.player)
  const { isError, data } = useQuery(['songDetail', currentSong], () => requestSongDetail(currentSong), {
    enabled: !!currentSong,
  })
  isError && message.error('网络异常')
  const song = data?.songs?.[0]

  const audioRef = useRef()

  const playAndPause = useCallback(() => {
    if (!song) {
      return
    }
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying, song])

  const timeUpdate = useCallback(e => {
    if (!song?.dt || isChanging) {
      return
    }
    setCurrentTime(e.target.currentTime * 1000)
    setProgress(currentTime * 100 / song?.dt)
  }, [currentTime, isChanging, song?.dt])

  const sliderChange = useCallback(value => {
    if (!song) {
      return
    }
    setIsChanging(true)
    setCurrentTime(value / 100 * song?.dt)
    setProgress(value)
  }, [song])

  const sliderAfterChange = useCallback(value => {
    if (!song?.dt) {
      return
    }
    const currentTime = value / 100 * song?.dt
    setCurrentTime(currentTime)
    audioRef.current.currentTime = currentTime / 1000
    setIsChanging(false)
  }, [song?.dt])

  const handleEnd = useCallback(() => {
    setIsPlaying(false)
  }, [setIsPlaying])

  useEffect(() => {
    if (!song?.id) {
      return
    }
    audioRef.current.src = getPlaySong(song?.id)
    if (!isPlaying) {
      playAndPause()
    } else {
      audioRef.current.play()
    }
  }, [song?.id])

  return (
    <PlaybarWrapper className={'sprite_player'}>
      <div className={'content wrap-v2'}>
        <Control isPlaying={isPlaying}>
          <button className={'sprite_player btn prev'}/>
          <button className={'sprite_player btn play'} onClick={playAndPause}/>
          <button className={'sprite_player btn next'}/>
        </Control>
        <PlayInfo>
          <div className={'image'}>
            <NavLink to={!!song?.id ? '/song?id=' + song?.id : ''}>
              <img src={getSizeImg(song?.al?.picUrl ?? PLAYER_DEFAULT_PIC_URL, 34)} alt={'avatar'}/>
            </NavLink>
          </div>
          <div className={'info'}>
            <div className={'song'}>
              <NavLink to={!!song?.id ? '/song?id=' + song?.id : ''}
                       className={'song-name'} title={song?.name ?? ''}>{song?.name ?? ''}</NavLink>
              <a href={!!song?.ar?.[0]?.id ? 'https://music.163.com/artist?id=' + song?.ar?.[0]?.id : '/#'}
                 className={'singer-name'} target={'_blank'} rel="noreferrer"
                 title={song?.ar?.[0]?.name ?? ''}>{song?.ar?.[0]?.name ?? ''}</a>
            </div>
            <div className={'progress'}>
              <Slider defaultValue={0} tooltipVisible={false} value={progress} onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className={'time'}>
                <span className={'now-time'}>{formatDate(currentTime, 'mm:ss')}</span>
                <span className={'divider'}>/</span>
                <span className={'duration'}>{formatDate(song?.dt ?? 0, 'mm:ss')}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleEnd}/>
    </PlaybarWrapper>
  )
})
