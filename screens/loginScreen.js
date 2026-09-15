import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { LoginStyles } from './styles/loginScreenStyles';
import { colors } from '../theme';


export default function LoginScren({ navigation }){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={[GlobalStyles.body, {justifyContent: 'center', alignItems: 'center'}]}>

          <InputRect placeholder='Username' placeholderTextColor={colors.textWhite}/>

          <InputRect placeholder='Password' placeholderTextColor={colors.textWhite} />

          <ButtonHighlight label={"Login"} styleText={GlobalStyles.textComponent}/>

          <ButtonHighlight label={"Sign up!"} styleText={{color: colors.move}} styleButton={{backgroundColor: "transparent"}}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}