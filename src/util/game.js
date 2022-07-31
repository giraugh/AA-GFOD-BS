import { MIN_AGE, MAX_AGE } from '../config/game'

export const calcPivot = (responses) => {
  let max = MAX_AGE
  let min = MIN_AGE
  for (let [pivot, res, questionType] of responses) {
    if (questionType === 'gt') {
      if (res) {
        min = pivot + 1
      } else {
        max = pivot
      }
    }

    if (questionType === 'lt') {
      if (res) {
        max = pivot - 1
      } else {
        min = pivot
      }
    }
  }

  return Math.floor((max + min) / 2)
}
