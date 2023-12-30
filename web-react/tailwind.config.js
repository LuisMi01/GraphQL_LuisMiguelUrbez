import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray': '#a7a5c6',
        'cool-gray-2': '#8797b2',
        'slate-gray': '#6d8a96',
        'paynes-gray': '#5d707f',
        'robin-egg-blue': '#66ced6',
      },
    },
  },
  plugins: [],
}
export default config