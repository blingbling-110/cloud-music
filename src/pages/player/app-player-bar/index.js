import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Control, Operator, PlaybarWrapper, PlayInfo } from '@/pages/player/app-player-bar/style'
import { message, Slider } from 'antd'
import { useQuery } from 'react-query'
import { requestLyric, requestSongDetail } from '@/services/player'
import { useDispatch, useSelector } from 'react-redux'
import { NEXT, PLAY_LOOP, PLAY_RANDOM, PLAY_SINGLE, PLAYER_DEFAULT_PIC_URL, PREV } from '@/common/constants'
import { formatDate, getPlaySong, getSizeImg } from '@/utils/formatter'
import { NavLink } from 'react-router-dom'
import { chgSequence, switchSong } from '@/pages/player/app-player-bar/playerSlice'
import { parseLyric } from '@/utils/lyric'

export default memo(function () {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { playList, curSongIdx, sequence } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const songIdx = useMemo(() => playList[curSongIdx], [curSongIdx, playList])
  const { isError: isSongError, data: songData } = useQuery(['songDetail', songIdx], () => requestSongDetail(songIdx), {
    enabled: !!songIdx,
  })
  isSongError && message.error('获取歌曲详情失败，请检查网络')
  const song = useMemo(() => songData?.songs?.[0], [songData?.songs])
  const { isError: isLyricError, data: lyricData } = useQuery(['lyric', songIdx], () => requestLyric(songIdx), {
    enabled: !!songIdx,
  })
  isLyricError && message.error('获取歌词失败，请检查网络')
  const lyric = useMemo(() => parseLyric(lyricData?.lrc?.lyric), [lyricData?.lrc?.lyric])

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

  const onTimeUpdate = useCallback(e => {
    if (!song?.dt || isChanging) {
      return
    }
    setCurrentTime(e.target.currentTime * 1000)
    setProgress(currentTime * 100 / song?.dt)
  }, [currentTime, isChanging, song?.dt])

  const onSliderChange = useCallback(value => {
    if (!song) {
      return
    }
    setIsChanging(true)
    setCurrentTime(value / 100 * song?.dt)
    setProgress(value)
  }, [song])

  const onSliderAfterChange = useCallback(value => {
    if (!song?.dt) {
      return
    }
    const currentTime = value / 100 * song?.dt
    setCurrentTime(currentTime)
    audioRef.current.currentTime = currentTime / 1000
    setIsChanging(false)
  }, [song?.dt])

  const onEnded = useCallback(() => {
    if (sequence === PLAY_SINGLE) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(switchSong(NEXT))
    }
  }, [dispatch, sequence])

  useEffect(() => {
    if (!song?.id) {
      return
    }
    audioRef.current.src = getPlaySong(song?.id)
    audioRef.current.play()
    setIsPlaying(true)
  }, [song?.id])

  const switchSequence = useCallback(() => {
    switch (sequence) {
      case PLAY_LOOP:
        dispatch(chgSequence(PLAY_RANDOM))
        break
      case PLAY_RANDOM:
        dispatch(chgSequence(PLAY_SINGLE))
        break
      default:
        dispatch(chgSequence(PLAY_LOOP))
        break
    }
  }, [dispatch, sequence])

  const sequenceTitle = useMemo(() => {
    switch (sequence) {
      case PLAY_LOOP:
        return '循环'
      case PLAY_RANDOM:
        return '随机'
      default:
        return '单曲循环'
    }
  }, [sequence])

  const playPrev = useCallback(() => {
    dispatch(switchSong(PREV))
  }, [dispatch])

  const playNext = useCallback(() => {
    dispatch(switchSong(NEXT))
  }, [dispatch])

  return (
    <PlaybarWrapper className={'sprite_player'}>
      <div className={'content wrap-v2'}>
        <Control isPlaying={isPlaying}>
          <button className={'sprite_player btn prev'} title={'上一首'} onClick={playPrev}/>
          <button className={'sprite_player btn play'} title={'播放/暂停'} onClick={playAndPause}/>
          <button className={'sprite_player btn next'} title={'下一首'} onClick={playNext}/>
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
              <Slider defaultValue={0} tooltipVisible={false} value={progress} onChange={onSliderChange}
                      onAfterChange={onSliderAfterChange}/>
              <div className={'time'}>
                <span className={'now-time'}>{formatDate(currentTime, 'mm:ss')}</span>
                <span className={'divider'}>/</span>
                <span className={'duration'}>{formatDate(song?.dt ?? 0, 'mm:ss')}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className={'left'}>
            <button className={'sprite_player btn favor'} title={'收藏'}/>
            <button className={'sprite_player btn share'} title={'分享'}/>
          </div>
          <div className={'right sprite_player'}>
            <button className={'sprite_player btn volume'}/>
            <button className={'sprite_player btn loop'} title={sequenceTitle} onClick={switchSequence}/>
            <button className={'sprite_player btn playlist'} title={'播放列表'}/>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={onEnded}/>
    </PlaybarWrapper>
  )
})
