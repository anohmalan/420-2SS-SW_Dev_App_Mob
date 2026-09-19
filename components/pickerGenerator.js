import {View, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { colors } from '../theme';

export function PickerGenerator({ ITEM_OPTIONS, duration }){
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}
    >
      {ITEM_OPTIONS.map((option, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Picker
              selectedValue={!!duration[index] && duration[index]}
              style={{ color: colors.second }}
              dropdownIconColor={colors.second}
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