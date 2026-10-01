import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function InputRect({placeholder,style, ...otherProps}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={[styles.input, style]}
            placeholderTextColor={colors.textWhite}
            {...otherProps}
        />
    )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color: colors.second,
    height: 40 , 
    width: 250
  }
});