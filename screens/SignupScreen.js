import { View } from 'react-native';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from './styles/globalStyles';
import { SignupStyles } from './styles/signupScreenStyles';
export default function SignupScreen({ navigation }){
  function handleCreateAccount(){
    return(     
      navigation.replace('RecipesScreen')   
    );
  }  
 return (
    <View style={[GlobalStyles.container,SignupStyles.container]}>
      
      <InputRect placeholder='Username'/>

      <InputRect placeholder='Password'/>

      <InputRect placeholder='Password confirmation'/>

      <ButtonHighlight label={"Create my account"} onPress={() => {handleCreateAccount()}}/>

    </View>
  );
}