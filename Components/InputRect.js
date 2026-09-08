import {TextInput, StyleSheet} from 'react-native';

export function InputRect({placeholder,style, ...otherProps}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={[styles.input, style]}
            {...otherProps}
        />
    )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color:"#FFFFFF",
    height: '6%' , 
    width: '70%'
  }
});