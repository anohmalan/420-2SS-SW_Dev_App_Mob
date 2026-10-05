import { View } from 'react-native';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { LoginStyles } from './styles/loginScreenStyles';
import { colors } from '../theme';
import * as React from 'react';


export default function LoginScreen({ navigation }){

  React.useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  });

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