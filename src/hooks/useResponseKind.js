import create from 'zustand'

const kinds = ['gt', 'lt']

const useResponseKind = create((set) => ({
  kind: 'gt',
  randomizeKind: () =>
    set({ kind: kinds[Math.floor(Math.random() * kinds.length)] }),
}))

export default useResponseKind
