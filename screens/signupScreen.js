import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from './styles/globalStyles';
import { SignupStyles } from './styles/signupScreenStyles';
import { colors } from '../theme';

export default function SignupScreen(){
 return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={[GlobalStyles.body, {justifyContent: 'center', alignItems: 'center'}]}>
         
          <InputRect placeholder='Username'/>

          <InputRect placeholder='Password'/>

          <InputRect placeholder='Password confirmation'/>

          <ButtonHighlight label={"Create my account"} styleText={GlobalStyles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}