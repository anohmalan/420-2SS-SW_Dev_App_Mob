import { TextInput} from 'react-native';
import { InputStyles } from './styles/inputStyles';
import { colors } from '../theme';

export function InputRect({placeholder,style, ...otherProps}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={[InputStyles.input, style]}
            placeholderTextColor={colors.textWhite}
            {...otherProps}
        />
    )
}