import { View, ViewProps } from 'react-native';
import { getAccessibilityProps } from '../utils/platform';

type AccessibleViewProps = ViewProps & {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  accessibilityRole?: string;
};

export function AccessibleView({ 
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole,
  ...props 
}: AccessibleViewProps) {
  const accessibilityProps = getAccessibilityProps({
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
  });

  return <View {...props} {...accessibilityProps} />;
}