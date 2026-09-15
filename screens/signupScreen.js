import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from './styles/globalStyles';
import { SignupStyles } from './styles/signupScreenStyles';

export default function SignupScreen(){
 return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={[GlobalStyles.body, {justifyContent: 'center', alignItems: 'center'}]}>
         
          <InputRect placeholder='Username'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password confirmation'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Create my account"} styleText={GlobalStyles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}