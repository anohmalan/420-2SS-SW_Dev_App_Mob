import { TouchableHighlight} from 'react-native';
import { TextComponent } from './TextComponent';
import { ButtonStyles } from './styles/buttonStyles';

export function ButtonHighlight({label,styleText, styleButton, ...otherProps}){
  return(
    <TouchableHighlight style={[ButtonStyles.button, styleButton]} activeOpacity={0.6} {...otherProps}>

      <TextComponent label={label} style={styleText}/>

    </TouchableHighlight>
  );
}