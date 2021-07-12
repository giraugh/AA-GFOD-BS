const locale = 'EN_AU'
const strings = {
  EN_AU: {
    greeting: `Hey there!`,
    greetingPrompt: `I reckon I can guess your age!`,
    greetingHint: `Or you could think of another age`,
    guess: (value, kind) =>
      `Are you ${kind === 'gt' ? 'older' : 'younger'} than ${value}?`,
    end: (value) => `I think you are ${value} year${value > 1 ? 's' : ''} old!`,
  },
}

export default strings[locale]
