import {TouchableHighlight } from 'react-native';
import { TextComponent } from './TextComponent';

export function ButtonHighlight({label,styleText, styleButton}){
  return(
    <TouchableHighlight style={[styleButton]} activeOpacity={0.6}>

      <TextComponent label={label} style={styleText}/>

    </TouchableHighlight>
  );
}