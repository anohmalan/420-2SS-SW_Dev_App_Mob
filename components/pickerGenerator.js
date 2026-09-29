import {View, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PickerStyles } from './styles/pickerStyles';
import { colors } from '../theme';

export function PickerGenerator({ ITEM_OPTIONS, duration, onValueChange }){
  return (
    <View
      style={[PickerStyles.container]}
    >
      {ITEM_OPTIONS.map((option, index) => (
        <View
          key={index}
          style={[PickerStyles.container]}
        >
          <View style={{ flex: 1 }}>
            <Picker
              selectedValue={duration[index]}
              style={[PickerStyles.thePicker]}
              dropdownIconColor={colors.second}
              onValueChange={(value) => onValueChange(value, index)}
            >
              {[...Array(option.value).keys()].map((item) => (
                <Picker.Item
                  key={item}
                  label={`${item}${option.label}`}
                  value={item}
                />
              ))}
            </Picker>
          </View>

          {index < ITEM_OPTIONS.length - 1 && (
            <Text style={{ color: colors.second }}>:</Text>
          )}
        </View>
      ))}
    </View>
  );
}