export const parameters = {
  backgrounds: {
    default: 'sousanne',
    values: [
      {
        name: 'sousanne',
        value: '#fefefe'   
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}