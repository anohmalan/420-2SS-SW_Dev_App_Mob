
import {Text, View} from 'react-native';


export function TextComponent({label, ...otherProps}) {
  return (
    <View >
      <Text {...otherProps}>{label}</Text>
    </View>
  );
}