import { View } from 'react-native';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { LoginStyles } from './styles/loginScreenStyles';
import { colors } from '../theme';


export default function LoginScren({ navigation }){
  return (
    <View style={[GlobalStyles.container, LoginStyles.container]}>

      <InputRect placeholder='Username'/>

      <InputRect placeholder='Password'/>

      <ButtonHighlight label={"Login"} styleText={GlobalStyles.textComponent}/>

      <ButtonHighlight label={"Sign up!"} styleText={{color: colors.move}} styleButton={{backgroundColor: colors.transp}}/>

    </View>
  );
}