import { Platform } from 'react-native';
import { VictoryContainer } from 'victory-native';

// Create a custom container component that strips accessibility props on web
export class VictoryAccessibleContainer extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps,
  };

  // Override the getBaseProps method to filter accessibility props on web
  getBaseProps(props = this.props) {
    const baseProps = super.getBaseProps(props);
    
    if (Platform.OS === 'web') {
      // Remove accessibility props from all group elements
      return Object.keys(baseProps).reduce((acc, key) => {
        const {
          accessibilityHint,
          accessibilityLabel,
          accessibilityRole,
          ...rest
        } = baseProps[key];
        acc[key] = rest;
        return acc;
      }, {});
    }
    
    return baseProps;
  }

  render() {
    if (Platform.OS === 'web') {
      const {
        accessibilityHint,
        accessibilityLabel,
        accessibilityRole,
        ...rest
      } = this.props;
      return super.render(rest);
    }
    return super.render(this.props);
  }
}