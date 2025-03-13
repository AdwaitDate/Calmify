import { Platform } from 'react-native';

export const theme = {
  light: {
    primary: '#008080', // Teal
    secondary: '#40A6A6',
    background: '#F8FAFC',
    card: '#FFFFFF',
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
      inverse: '#FFFFFF',
    },
    border: '#E2E8F0',
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 15,
        },
        android: {
          elevation: 2,
        },
        default: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 15,
        },
      }),
    },
  },
  dark: {
    primary: '#40A6A6', // Lighter Teal for dark mode
    secondary: '#008080',
    background: '#1A1A1A',
    card: '#2D2D2D',
    text: {
      primary: '#FFFFFF',
      secondary: '#A0AEC0',
      inverse: '#1E293B',
    },
    border: '#404040',
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 15,
        },
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 15,
        },
      }),
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 16,
    lg: 24,
    full: 9999,
  },
}; 