import create from 'zustand'

import { GUESS_COUNT } from '../config/game'

const createEmpty = () => Array.from({ length: GUESS_COUNT })

const useResponses = create((set) => ({
  responses: createEmpty(),
  setResponse: (index, pivot, response, questionType = 'gt') =>
    set((state) => ({
      responses: state.responses.map((v, i) =>
        index === i ? [pivot, response, questionType] : v
      ),
    })),
  clear: () => set({ responses: createEmpty() }),
}))

export default useResponses
