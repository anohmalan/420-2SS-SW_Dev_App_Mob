import { View } from 'react-native';
import { InputRect } from "../components/inputRect";
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { LoginStyles } from './styles/loginScreenStyles';
import { colors } from '../theme';
import { useState } from 'react';


export default function LoginScren({ navigation }){

  function handleLogin(){
    return(     
      console.log("Pressé") , navigation.replace('RecipesScreen')     
    );

  }
  return (
    <View style={[GlobalStyles.container, LoginStyles.container]}>

      <InputRect placeholder='Username'/>

      <InputRect placeholder='Password'/>

      <ButtonHighlight label={"Login"} onPress={() => {handleLogin()}} styleText={GlobalStyles.textComponent}/>

      <ButtonHighlight label={"Sign up!"} styleText={{color: colors.move}} styleButton={{backgroundColor: colors.transp}}/>

    </View>
  );
}