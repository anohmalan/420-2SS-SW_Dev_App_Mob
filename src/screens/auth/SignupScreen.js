import { View } from 'react-native';
import { InputRect } from "../../components/InputRect";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { GlobalStyles } from '../styles/globalStyles';
import { SignupStyles } from '../styles/signupScreenStyles';
import auth from '../../services/auth'
import * as React from 'react';
import { Toast } from 'toastify-react-native';
import UserCredentials from '../../models/user-credentials';

export default function SignupScreen({ navigation }){
  const [username, setUsername] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('') 
  const [password, setPassword] = React.useState('') 

  function validInput() {
    if(username.trim() === ''){
      Toast.error("Nom d'utilisateur requis", 'bottom');
      return null;
    }else if(password.trim() === ''){
      Toast.error("Mot de passe requis", 'bottom');
      return null;
    }else if(passwordConfirmation.trim() === ''){
      Toast.error("Confirmation du mot de passe requise", 'bottom');
      return null;
    }

    if(password !== passwordConfirmation){
      Toast.error("Les mots de passe ne correspondent pas", 'bottom')
      return null;
    }    

    return new UserCredentials({ username: username.trim(), password });
  }

  async function handleCreateAccount(){
    const credentials = validInput();
    if(!credentials) return;

    try {
      const result = await auth.signUp(credentials);

      if(result.success){
        navigation.replace('RecipesScreen')
        Toast.success("Bienvenue sur Recipeasy", 'bottom')
      } else {
        Toast.error(result.error, 'bottom')
      }
    } catch (error) {
      Toast.error("Impossible de joindre le serveur", 'bottom')
    }
  }

 return (
    <View style={[GlobalStyles.container,SignupStyles.container]}>
      <InputRect
        placeholder='Username'
        autoCapitalize='none'
        onChangeText={setUsername}
      />

      <InputRect
        placeholder='Password'
        onChangeText={setPassword}
      />

      <InputRect
        placeholder='Password confirmation'
        onChangeText={setPasswordConfirmation}
      />
      <ButtonHighlight label={"Create my account"} onPress={handleCreateAccount}/>
    </View>
  );
}