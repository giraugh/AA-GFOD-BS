import create from 'zustand'

const useResponses = create(set => ({
  responses: [],
  addResponse: (pivot, response) => set(state => ({
    responses: [...state.responses, [pivot, response]]
  })),
  clear: () => set({ responses: [] })
}))

export default useResponses
