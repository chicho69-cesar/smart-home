import { Platform } from "react-native";

const globalTheme = {
  fontSizes: {
    body: 14,
    titles: 18,
    subtitles: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    thin: '300',
    normal: '400',
    bold: '700'
  },
  colors: {
    blue: {
      blue100: '#caf0f8',
      blue200: '#ade8f4',
      blue300: '#90e0ef',
      blue400: '#48cae4',
      blue500: '#00b4d8',
      blue600: '#0096c7',
      blue700: '#0077b6',
      blue800: '#023e8a',
      blue900: '#03045e'
    },
    black: {
      blackPrimary: '#101010',
      blackSecondary: '#202020',
      blackThird: '#404040',
    }
  }
};

export default globalTheme;