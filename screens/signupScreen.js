import { View } from 'react-native';
import { InputRect } from "../components/inputRect";
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from './styles/globalStyles';
import { SignupStyles } from './styles/signupScreenStyles';
import { colors } from '../theme';

export default function SignupScreen({ navigation }){
 return (
    <View style={[GlobalStyles.container,SignupStyles.container]}>
      
      <InputRect placeholder='Username'/>

      <InputRect placeholder='Password'/>

      <InputRect placeholder='Password confirmation'/>

      <ButtonHighlight label={"Create my account"} styleText={GlobalStyles.textComponent}/>

    </View>
  );
}