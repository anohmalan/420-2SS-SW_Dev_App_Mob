import {View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { colors } from '../theme';

export function PickerGenerator({ ITEM_OPTIONS, duration, onValueChange }){
  return (
    <View
      style={[styles.container]}
    >
      {ITEM_OPTIONS.map((option, index) => (
        <View
          key={index}
          style={[styles.container]}
        >
          <View style={{ flex: 1 }}>
            <Picker
              selectedValue={duration[index]}
              style={[styles.thePicker]}
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

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  thePicker:{ 
    color: colors.second, 
    backgroundColor: colors.transp, 
    borderWidth:0 
  }
})