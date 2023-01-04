import { signal } from '@preact/signals-react'

export const passwordStrength = signal({
  guesses: null,
  crack_times_display: {},
  score: 0,
  feedback: {
    warning: null,
    suggestions: [],
  },
})

export const passwordInput = signal('')
