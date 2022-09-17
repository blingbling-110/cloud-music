import { LYRIC_EXP } from '@/common/constants'

export function parseLyric (lyric) {
  if (!lyric) {
    return
  }

  const res = []
  const lines = lyric.split('\n')
  for (const line of lines) {
    if (!line) {
      continue
    }
    const resArr = LYRIC_EXP.exec(line)
    if (!resArr) {
      continue
    }
    const [, minute, second, millisecond] = resArr
    const time = minute * 60 * 1000 + second * 1000 + millisecond.length === 3 ? millisecond : millisecond * 10
    const content = line.replace(LYRIC_EXP, '').trim()
    res.push({ time, content })
  }

  return res
}
