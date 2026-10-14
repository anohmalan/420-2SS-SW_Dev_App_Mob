import { View, Button } from 'react-native';
import { InputRect } from "../../components/InputRect";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { GlobalStyles } from "../styles/globalStyles";
import { LoginStyles } from '../styles/loginScreenStyles';
import { colors } from '../../theme/index';
import * as React from 'react';
import UserCredentials from '../../models/user-credentials';
import auth from '../../services/auth'
import { Toast } from 'toastify-react-native';


export default function LoginScreen({ navigation }){
  const [user, setUser] = React.useState()
  const [credentials, setCredentials] = React.useState(new UserCredentials({username: '', password: ''}))
  React.useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  });

  async function handleLogin(){   
    console.log({credentials})
    const success = await auth.logIn(credentials);

    console.log({success, user: auth.currentUser})

    setUser(auth.currentUser)
    console.log(auth.currentUser)
    setCredentials(new UserCredentials({username: '', password: ''}))
    if(success){
      navigation.replace('RecipesScreen') 
    }else{
      Toast.error("Nom d'utilisateur ou mot de passe incorrect", 'bottom')
    }  
  }

  function handleSignup(){
    return(     
      navigation.navigate('SignupScreen')   
    );
  }
  return (
    <View style={[GlobalStyles.container, LoginStyles.container]}>

      <InputRect placeholder='Username' value={credentials.username}
        onChangeText={ username => setCredentials(new UserCredentials({...credentials, username: username }))}
      />

      <InputRect placeholder='Password' value={credentials.password} 
        onChangeText={ password => setCredentials(new UserCredentials({...credentials, password: password }))}
      />

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