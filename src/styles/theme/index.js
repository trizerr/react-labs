import { extendTheme } from 'native-base';
import * as atoms from '../../components/atoms';

const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 64,
  10: 80,
};

export const theme = extendTheme({
  colors: {
    primary: {
      normal: '#f75c49',
      dark: '#cd4837',
    },
    black: '#272830',
    white: '#FFF',
    gray: {
      primary: '#767676',
      dark: '#464547',
    },
    red: {
      50: '#EE2C3D',
      40: '#F85E5E',
      20: '#FFE6E6',
      10: '#FFF6F6',
    },
    violet: {
      40: '#9568FF',
      20: '#E3D7FF',
    },
    green: {
      40: '#19AF92',
      20: '#D8F1EA',
    },
    yellow: {
      40: '#F8B414',
      20: '#FFEDBD',
    },
    blue: {
      20: '#EBF1FA',
      10: '#F6F7F9',
    },
  },
  fontSizes: {
    h1: 24,
    h2: 20,
    h3: 16,
    h4: 14,
    h5: 14,
    body: 16,
    caption: 12,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  space: spacing,
  sizes: spacing,
  components: {
    Button: atoms.Button,
  },
});

export default theme;
