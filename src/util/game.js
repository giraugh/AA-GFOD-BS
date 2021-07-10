import { MIN_AGE, MAX_AGE } from '../config/game'

export const calcPivot = (responses) => {
  let max = MAX_AGE
  let min = MIN_AGE
  for (let [pivot, res] of responses) {
    if (res) {
      min = pivot + 1
    } else {
      max = pivot
    }
  }

  return Math.floor((max + min) / 2)
}
