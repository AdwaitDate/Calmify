import { Platform } from 'react-native';
import Svg, { Circle, Rect, Path, G, SvgProps } from 'react-native-svg';

type AccessibleSvgProps = SvgProps & {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  accessibilityRole?: string;
};

// Helper function to filter out accessibility props on web
const filterAccessibilityProps = (props: AccessibleSvgProps) => {
  if (Platform.OS === 'web') {
    const {
      accessibilityHint,
      accessibilityLabel,
      accessibilityRole,
      ...rest
    } = props;
    return rest;
  }
  return props;
};

// Create wrapped components
export const AccessibleSvg = (props: AccessibleSvgProps) => (
  <Svg {...filterAccessibilityProps(props)} />
);

export const AccessibleRect = (props: AccessibleSvgProps) => (
  <Rect {...filterAccessibilityProps(props)} />
);

export const AccessibleCircle = (props: AccessibleSvgProps) => (
  <Circle {...filterAccessibilityProps(props)} />
);

export const AccessiblePath = (props: AccessibleSvgProps) => (
  <Path {...filterAccessibilityProps(props)} />
);

export const AccessibleG = (props: AccessibleSvgProps) => (
  <G {...filterAccessibilityProps(props)} />
);