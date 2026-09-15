import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyle";


export default function LoginScren({ navigation }){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={[GlobalStyles.body, {justifyContent: 'center', alignItems: 'center'}]}>

          <InputRect placeholder='Username' placeholderTextColor="#FFFFFF"/>

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Login"} styleText={GlobalStyles.textComponent}/>

          <ButtonHighlight label={"Sign up!"} styleText={{color: "#4a32c1"}} styleButton={{backgroundColor: "transparent"}}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}