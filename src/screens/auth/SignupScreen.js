import { View } from 'react-native';
import { InputRect } from "../../components/InputRect";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { GlobalStyles } from '../styles/globalStyles';
import { SignupStyles } from '../styles/signupScreenStyles';
import { auth } from '../../services/auth'
import * as React from 'react';
import { UserCredentials } from '../../models/user-credentials'
import { Toast } from 'toastify-react-native';

export default function SignupScreen({ navigation }){
  const [credentials, setCredentials] = React.useState(new UserCredentials({username: '', password: ''}))

  const [passwordConfirmation, setPasswordConfirmation] = React.useState('') 
  const [password, setPassword] = React.useState('') 

  async function handleCreateAccount(){

    if(password !== passwordConfirmation){
      Toast.error("Les mots de passe ne correspondent pas", 'bottom')
      return;
    }
    const response = await auth.signUp(credentials);
    if(response.succes){
      auth.currentUser = response.user;
      navigation.replace('RecipesScreen')
      Toast.success("Bienvenu sur Recieasy", 'bottom')
    } else {
      Toast.error("Erreur lors de la création du compte", 'bottom')
    }
  }  
 return (
    <View style={[GlobalStyles.container,SignupStyles.container]}>
      
      <InputRect placeholder='Username' onTextChange={ username => setCredentials(new UserCredentials({...credentials, username: username }))}/>

      <InputRect placeholder='Password' onTextChange={ password => setPassword(password) }/>

      <InputRect placeholder='Password confirmation' onTextChange={ passwordConfirmation => setPasswordConfirmation(passwordConfirmation) }/>

      <ButtonHighlight label={"Create my account"} onPress={() => {handleCreateAccount()}}/>

    </View>
  );
}