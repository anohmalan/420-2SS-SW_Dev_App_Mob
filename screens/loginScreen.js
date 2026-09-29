import { View } from 'react-native';
import { InputRect } from "../components/inputRect";
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { LoginStyles } from './styles/loginScreenStyles';
import { colors } from '../theme';


export default function LoginScren({ navigation }){

  function handleLogin(){
    return(     
      navigation.replace('RecipesScreen')   
    );
  }
  function handleSignup(){
    return(     
      navigation.navigate('SignupScreen')   
    );
  }
  return (
    <View style={[GlobalStyles.container, LoginStyles.container]}>

      <InputRect placeholder='Username'/>

      <InputRect placeholder='Password'/>

      <ButtonHighlight label={"Login"} 
        onPress={() => {handleLogin()}} 
      />

      <ButtonHighlight label={"Sign up!"} 
        onPress={() => {handleSignup()}} 
        styleText={{color: colors.move}} 
        styleButton={{backgroundColor: colors.transp}}
      />

    </View>
  );
}