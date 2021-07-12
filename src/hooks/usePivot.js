import useResponses from './useResponses'
import { calcPivot } from '../util/game'

const usePivot = (index) => {
  const {responses} = useResponses()
  const prevResponses = responses.slice(0, index)
  const pivot = calcPivot(prevResponses)
  return pivot
}

export default usePivot
