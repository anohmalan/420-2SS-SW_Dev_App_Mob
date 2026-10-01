import {Text, View} from 'react-native';
import { GlobalStyles } from '../screens/styles/globalStyles';

export function TextComponent({label, ...otherProps}) {
  return (
    <View >
      <Text {...otherProps} style={[GlobalStyles.textComponent, otherProps.style]}>{label}</Text>
    </View>
  );
}