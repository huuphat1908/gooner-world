import { extendTheme } from 'native-base'
import { scale } from 'react-native-size-matters'

import { colors } from '@/constants'

interface SpaceObject {
  [key: string]: number
}

const spaces = (): SpaceObject => {
  const result: SpaceObject = {}
  for (let i = 0; i < 100; i++) {
    result[i] = scale(i)
  }
  return result
}

const theme = extendTheme({
  fontConfig: {
    JetBrainsMono: {
      100: {
        normal: 'JetBrainsMono-Light',
        italic: 'JetBrainsMono-LightItalic',
      },
      200: {
        normal: 'JetBrainsMono-Light',
        italic: 'JetBrainsMono-LightItalic',
      },
      300: {
        normal: 'JetBrainsMono-Light',
        italic: 'JetBrainsMono-LightItalic',
      },
      400: {
        normal: 'JetBrainsMono-Regular',
        italic: 'JetBrainsMono-Italic',
      },
      500: {
        normal: 'JetBrainsMono-Medium',
      },
      600: {
        normal: 'JetBrainsMono-Medium',
        italic: 'JetBrainsMono-MediumItalic',
      },
      700: {
        normal: 'JetBrainsMono-Bold',
      },
      800: {
        normal: 'JetBrainsMono-Bold',
        italic: 'JetBrainsMono-BoldItalic',
      },
      900: {
        normal: 'JetBrainsMono-Bold',
        italic: 'JetBrainsMono-BoldItalic',
      },
    },
  },
  fonts: {
    JetBrainsMono: 'JetBrainsMono',
  },
  sizes: spaces,
  space: spaces,
  fontSizes: spaces,
  components: {
    Text: {
      defaultProps: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: scale(16),
        color: colors.black,
      },
    },
    Input: {
      defaultProps: {
        fontFamily: 'JetBrainsMono-Regular',
        fontSize: scale(16),
        color: colors.black,
      },
    },
  },
})

export default theme
