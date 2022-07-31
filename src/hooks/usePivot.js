import useResponses from './useResponses'
import { calcPivot } from '../util/game'

const usePivot = (index) => {
  const { responses } = useResponses()
  const previousResponses = responses.slice(0, index)
  if (previousResponses.some(x => !x))
    return
  const pivot = calcPivot(previousResponses)
  return pivot
}

export default usePivot
