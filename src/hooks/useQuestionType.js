import create from 'zustand'

const QUESTION_TYPES = ['gt', 'lt']

const useQuestionType = create((set) => ({
  type: 'gt',
  randomizeQuestionType: () =>
    set({ questionType: QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)] }),
}))

export default useQuestionType
