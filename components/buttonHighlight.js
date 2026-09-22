import {TouchableHighlight, StyleSheet} from 'react-native';
import { TextComponent } from './textComponent';
import { colors } from '../theme';

export function ButtonHighlight({label,styleText, styleButton, ...otherProps}){
  return(
    <TouchableHighlight style={[styles.button, styleButton]} activeOpacity={0.6} {...otherProps}>

      <TextComponent label={label} style={styleText}/>

    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    button:{
    backgroundColor: colors.buttonPrimary, 
    width: "auto",
    padding: 10,
    alignItems: 'center', 
    height: 40, 
    justifyContent: "center", 
    borderRadius: 3
  },
});