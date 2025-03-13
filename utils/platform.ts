import { Platform } from 'react-native';

type AccessibilityProps = {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  accessibilityRole?: string;
};

export const getAccessibilityProps = (props: AccessibilityProps) => {
  if (Platform.OS === 'web') {
    // Remove accessibility props on web to prevent warnings
    return {};
  }
  return props;
};