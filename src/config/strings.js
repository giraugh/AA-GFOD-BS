const locale = 'EN_AU'
const strings = {
  EN_AU: {
    greeting: `Hey there!`,
    greetingPrompt: `I reckon I can guess your age!`,
    greetingHint: `Or you could think of someone else's age`,
    guess: (value, questionType) =>
      `Are you ${questionType === 'gt' ? 'more' : 'less'} than ${value} years old?`,
    end: (value) => `I think you are ${value} year${value > 1 ? 's' : ''} old!`,
  },
}

export default strings[locale]
